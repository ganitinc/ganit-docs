---
id: stockHoldingFactor
title: Stock Holding Factor
sidebar_label: Stock Holding Factor
---
The additional stock that has to be ordered (a delta on balance stock) for safety stock and to ensure that the crates do not look empty

## Schema
Bill

## Type
Master

## Rules
1. shelf_life is in (1, 2, 3) and subclass not leafy then shf = 0.1
2. shelf_life (any) and subclass = 'leafy' then 0.2
3. if shelf_life is 4 then shf = 0.3
4. All the other cases shf = 0.4

## Tables
1. Item Master ("items_hierarchy_d","item_attirbutes_d")

## Columns Retrieved
1. item
2. subclass (this will not be required once we get SOH reset flag)
3. Shelf_life Flag

## Filters
1. Department : "Fruits", "Vegetables"

## Joins
1. item_attributes_dbutes_d.item_no (inner join) item_hierarchy_d.item_no

## Query
```sql
( 
select 
   item_hierarchy_d.item_no as item, 
   item_hierarchy_d.subclass, 
   (
      CASE
         WHEN
            shelf_life in 
            (
               1,
               2,
               3
            )
            and lower( item_hierarchy_d.subclass) != 'leafy' 
         THEN
            0.1 
         WHEN
            lower( item_hierarchy_d.subclass) = 'leafy' 
         THEN
            0.2 
         WHEN
            shelf_life in 
            (
               4
            )
         THEN
            0.3 
         ELSE
            0.4 
      END
   )
   stock_holding_factor 
from
   bill.item_hierarchy_d item_hierarchy_d (NOLOCK) Inner 
   Join
      bill.item_attributes_d (NOLOCK) item_attributes_d 
      On item_hierarchy_d.item_no = item_attributes_d.item_no 
Where
   item_hierarchy_d.department in 
   (
      {department}
   )
)
```
## Comments 
Pumpkin ('100112069') would have SOH = 0 as it has an inner join. (This was addresses later). For 'leafy' subclass = SOH = 0.2,

## Author
Vijaymurugan Duraisamy

## Reviewed By
Vijaymurugan Duraisamy

## Version
1.0.0
