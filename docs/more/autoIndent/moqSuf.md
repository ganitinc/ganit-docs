---
id: moqSuf
title: Moq Suf
sidebar_label: Moq Suf
---
Minimum Order Quantity (MOQ), Supplu Unit Factor (SUF), Active Stores and Active Items within a Store, Items for which MOQ exists, Items for which SUF exists

## Schema
1. Bill
2. Ganit auto indent

## Type
Master

## Tables
1. ganit.auto_indent
2. bill.store_details
3. bill.item_hierarchy_d

## Columns Retrieved
1. store
2. item
3. moq
4. suf
5. indent_qty
6. (#dc_city, format, department are redundant)

## Filters
1. [stores in  [dc_city : "bangalore", "pune"...], [store.isactive : 1 (only active stores)]] AND
2. Active Stores (flagged as "A") and Active SKU's (flagged as "A")
3. [store.format : "HM", "SM"], [transaction type : "Sale"], [sub_tran_type : 'OFFLIN']

## Group By
1. loc
2. item (# Date is optional depending upon the sql query)

## Query
```sql
select
   store as loc,
   item,
   min_indent_qty,
   suf,
   suf_status,
   min_indent_qty_status 
from
   ganit.auto_indent ( NOLOCK) 
where
   store_status = 'A' 
   AND item_status = 'A' 
   AND store IN 
   (
(
      SELECT
         location_code AS loc 
      FROM
         bill.store_details_d (NOLOCK) 
      WHERE
         LOWER(dc_city) IN 
         (
            {city}
         )
         AND 
         (
            LOWER(location_type) = 'store'
         )
         AND isactive = 1 
         AND format in 
         (
            {{format}}
         )
)
   )
order by
   loc,
   item asc
```

## Author
Vijaymurugan Duraisamy

## Reviewed By
Vijaymurugan Duraisamy

## Version
1.0.0
