---
id: avgSalesLastThirtyDays
title: Average Sales Last Thirty Days
sidebar_label: Average Sales Last Thirty Days
---
This table uses historical average sales (30 days rolling average) to calculate Expected Closing Stock(t+2) as a part of indent calculation

## Schema
Bill

## Type
Data Table 

## Tables
1. bill.sm_tran_f
2. bill.store_details
3. bill.item_hierarchy_d
4. bill.hm_tran_f has to be added

## Columns Retrieved
1. store
2. item
3. sales_qty
4. (#dc_city, format, department are redundant)

## Filters
1. [stores in  [dc_city : "bangalore", "pune"...], [store.isactive : 1 (only active stores)]] AND
2. [items in [Department : "Fruits", "Vegetables"] AND
3. [store.format : "HM", "SM"], [transaction type : "Sale"], [sub_tran_type : 'OFFLIN'] AND
4. Between Dates [ Date range input]

## Group By
1. loc
2. item (# Date is optional depending upon the sql query)

## Query
```sql
SELECT
   location_code AS loc,
   item_no AS item,
   Sum(bill_qty) / 30 AS sales_qty,
   Sum (bill_value) / 30 AS realised_sales 
FROM
   bill.sm_tran_f 
WHERE
   trunc( tran_datetime) >= % s 
   AND 
   (
      bill_qty >= 0
   )
   AND tran_type = 'SALE' 
   AND sub_tran_type = 'OFFLIN' 
   AND 
   (
      location_code IN 
      (
         SELECT
            location_code AS loc 
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
   )
   AND 
   (
      item_no IN 
      (
         SELECT
            item_no 
         FROM
            bill.item_hierarchy_d 
         WHERE
            department IN 
            (
               {{{{department}}}}
            )
      )
   )
GROUP BY
   loc,
   item
```

## Comments 
1. Note that items without any sale on a day will have no entry and should be considered zero. Hence, we divide by 30 to get average 
2. Should not use average on bill_qty as this is a transaction table. The data must be aggregated (summed if daily sales is required) and then another aggregation (say average) should be on top of that.
3. This code does not have bill.hm_tran_f and has to be modified if needed

## Author
Vijaymurugan Duraisamy

## Reviewed By
Vijaymurugan Duraisamy

## Version
1.0.0
