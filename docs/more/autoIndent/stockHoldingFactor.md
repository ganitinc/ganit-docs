---
id: stockHoldingFactor
title: Stock Holding Factor
sidebar_label: Stock Holding Factor
---
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

## Name

Test User


## Description

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


## Schema

Sample schema

## Tables

1. bill.item_hierarchy_d
2. bill.item_attributes_d


## Columns Retrieved

1. item_hierarchy_d.item_no as item
2. item_hierarchy_d.subclass
3. stock_holding_factor


## Parameters

1. item_hierarchy_d.subclass 

## Query

```sql
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

## Author
User 1

## Reviewed By
User 2

## Version
0.1
