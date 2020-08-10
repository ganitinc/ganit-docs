---
id: stockOnHand
title: Stock On hand
sidebar_label: Stock On Hand
---
The EOD closing stock. This data is refreshed on a t-1 basis where 't' is today

## Schema
Bill

## Type
Data Table

## Rules
1. If SOH < 0 then 0 else SOH
2. shelf_life (any) and subclass = 'leafy' then 0.2

## Tables
1. items_hierarchy_d
2. store_details_d
3. bill.sm_ll_soh_f
4. bill.hm_ll_soh_f

## Columns Retrieved
1. store
2. item
3. date 
4. soh (processed)

## Filters
1. Department : "Fruits", "Vegetables"
2. dc_city : "bangalore", "pune"...
3. store.isactive : 1 (only active stores)
4. store.format : "HM", "SM"

## Joins
1. item_hierarchy_d.item_no (inner join) bill.sm_ll_soh_f.item and bill.hm_ll_soh_f.item
2. bill.store_details_d.location_code (inner join) bill.sm_ll_soh_f.loc and bill.hm_ll_soh_f.item

## Group By
1. store
2. item
3. date

## Alternative Tables
ganit.soh_indent - This table has both 

## Query
```sql
( With SM_HM_Stock as
(
   SELECT
      sm.loc,
      sm.item,
      trunc(sm.DATE) AS DATE,
      sm.Stock_on_Hand 
   FROM
      bill.sm_ll_soh_f sm (NOLOCK) 
   Where
      trunc(sm.DATE) BETWEEN % s AND % s 
   Union ALL
   SELECT
      hm.loc,
      hm.item,
      trunc(hm.DATE) AS DATE,
      hm.stock_on_hand 
   FROM
      bill.hm_ll_soh_f hm (NOLOCK) 
   Where
      trunc(hm.DATE) BETWEEN % s AND % s
)
Select
   sm.loc, sm.item, sm.DATE, 
   (
      case
         when
            SUM(sm.stock_on_hand) < 0 
         then
            0 
         Else
            SUM( sm.stock_on_hand) 
      END
   )
   AS stock_on_hand 
From
   SM_HM_Stock sm (NOLOCK) 
   Join
      bill.store_details_d store (NOLOCK) 
      on sm.loc = store.location_code 
   Join
      bill.item_hierarchy_d it (NOLOCK) 
      on sm.item = it.Item_no 
WHERE
   LOWER(store.dc_city) IN 
   (
      {city}
   )
   AND LOWER(store.location_type) = 'store' 
   AND store.isactive = 1 
   AND store.format In 
   (
      {{format}}
   )
   AND it.department IN 
   (
      {{{{department}}}}
   )
GROUP BY
   sm.loc, sm.item, sm.DATE 
ORDER BY
   sm.loc, sm.item, sm.DATE )
```
## Comments
{city}, {{format}}, {{{{department}}}} ------ {} - Brackets would increase by a power of 2 as the values are stored in different objects. In other cases "%s" will work

## Author
Vijaymurugan Duraisamy

## Reviewed By
Vijaymurugan Duraisamy

## Version
1.0.0
