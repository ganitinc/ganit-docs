---
id: actualIndent
title: Actual Indent
sidebar_label: Actual Indent
---
1. The indent placed either by autoindent system or manually by stores. This data is refreshed on a t-1 basis where 't' is today.
2. Indent is placed on a t+2 or a t+1 cycle depending upon the city and store. Indent cycle is either 1 or 2 as given in the list for Fruits and Vegetables

## Schema
Bill

## Type
Data Table

## Tables
1. bill.indent_f
2. bill.store_details
3. bill.item_hierarchy_d

## Columns Retrieved
1. store
2. item
3. indent_date
4. indent_qty
5. (#dc_city, format, department are redundant)

## Filters
1. Department : "Fruits", "Vegetables"
2. dc_city : "bangalore", "pune"...
3. store.isactive : 1 (only active stores)
4. store.format : "HM", "SM"

## Joins
1. item_hierarchy_d.item_no (inner join) bill.sm_ll_soh_f.item and bill.hm_ll_soh_f.item
2. bill.store_details_d.location_code (inner join) bill.sm_ll_soh_f.loc and bill.hm_ll_soh_f.item

## Query
```sql
( (
SELECT
   t1.loc AS loc, t1.item AS item, indent_date, dc_city, format, department, indent_qty 
FROM
   (
(
      SELECT
         loc, item, Trunc(indent_date) AS indent_date, SUM(indent_qty) AS indent_qty 
      FROM
         bill.indent_f 
      WHERE
         indent_date BETWEEN % s AND % s 
      GROUP BY
         loc, item, indent_date) t1 
         join
            (
               SELECT
                  location_code,
                  dc_city,
                  format 
               FROM
                  bill.store_details_d 
               WHERE
                  Lower(dc_city) IN 
                  (
                     {city}
                  )
                  AND 
                  (
                     Lower( location_type) = 'store' 
                  )
                  AND isactive = 1 
                  AND format in 
                  (
                     {{format}}
                  )
            )
            t2 
            ON t2.location_code = t1.loc 
         join
            (
               SELECT
                  item_no,
                  department 
               FROM
                  bill.item_hierarchy_d 
               WHERE
                  department IN 
                  (
                     {{{{department}}}} 
                  )
            )
            t3 
            ON t3.item_no = t1.item
   )
) 
ORDER BY
   loc, item, indent_date, dc_city, format, department )
```

## Comments : 
1. We pick 2 dates as most of the stores have t+2 cycle. Based on the logic for indent calculation we pick t-2 and t-2 indent_qty. 
2. We use indent(t-2) for received_qty(t). We can also use in_transit_qty(t-1) for received_qty(t) from SOH table. Note : we will still need to pull indent (t-1) for received_qty (t+1)

## Author
Vijaymurugan Duraisamy

## Reviewed By
Vijaymurugan Duraisamy

## Version
1.0.0
