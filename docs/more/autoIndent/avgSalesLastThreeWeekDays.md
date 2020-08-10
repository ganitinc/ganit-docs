---
id: avgSalesLastThreeWeekDays
title: Average Sales Last Three Week Days
sidebar_label: Average Sales Last Three Week Days
---
1. This table uses historical Max sales that occured on same day in the last 3 weeks e.g Capping for wednesday (t+2) = max (wednesday (t+2) -7, wednesday (t+2) - 14, wednesday (t+2) - 21)
2. Variable is defined as "avg_sales_last_three_week_days_sql" as when initially conceived, this was average and later modified to max

## Schema
Bill

## Type
Data Table 

## Tables
1. bill.indent_f
2. bill.store_details
3. bill.item_hierarchy_d"

## Columns Retrieved
1. store
2. item
3. date
4. sales_qty

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
WITH max_sales AS 
(
   SELECT
      itm1.location_code,
      itm1.item_no,
      (
         sum(itm1.bill_qty)
      )
      sales,
      trunc(itm1.tran_datetime) as date 
   FROM
      bill.hm_tran_f itm1 (nolock) 
   WHERE
      trunc(itm1.tran_datetime) IN
      (
         {date}
      )
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
               lower(dc_city) IN
               (
                  {{city}}
               )
               AND
               (
                  lower( location_type) = 'store'
               )
               AND isactive = 1 
               AND format IN
               (
                  {{{{format}}}}
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
                  {{{{{{{ {department}}}}}}}}
               )
         )
      )
   GROUP BY
      Itm1.location_code,
      Itm1.item_no,
      date 
   UNION
   SELECT
      Itm1.location_code,
      Itm1.item_no,
      (
         SUM(Itm1.bill_qty)
      )
      as Sales,
      trunc(itm1.tran_datetime) as date 
   FROM
      bill.sm_tran_f itm1 (NOLOCK) 
   WHERE
      TRUNC( Itm1.tran_datetime)IN
      (
         {date}
      )
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
               lower(dc_city) IN
               (
                  {{city}}
               )
               AND
               (
                  lower(location_type) = 'store'
               )
               AND isactive = 1 
               AND format IN
               (
                  {{{{format}}}}
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
                  {{{{{{{{ department}}}}}}}}
               )
         )
      )
   GROUP BY
      Itm1.location_code,
      Itm1.item_no,
      date
)
SELECT
   location_code,
   item_no,
   max(sales) as max_sales 
FROM
   max_sales 
GROUP BY
   location_code,
   item_no 
ORDER BY
   location_code,
   item_no
```

## Author
Vijaymurugan Duraisamy

## Reviewed By
Vijaymurugan Duraisamy

## Version
1.0.0
