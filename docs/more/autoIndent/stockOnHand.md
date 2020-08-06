---
id: stockOnHand
title: Stock On hand
sidebar_label: Stock On Hand
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
(
    "With SM_HM_Stock as(SELECT sm.loc, sm.item, trunc(sm.DATE) AS DATE, sm.Stock_on_Hand FROM  "
    "bill.sm_ll_soh_f sm (NOLOCK) Where trunc(sm.DATE) BETWEEN %s AND %s "
    "Union ALL SELECT hm.loc, hm.item, trunc(hm.DATE) AS DATE, hm.stock_on_hand FROM  "
    "bill.hm_ll_soh_f hm (NOLOCK) Where trunc(hm.DATE) BETWEEN %s AND %s) "
    "Select sm.loc, sm.item, sm.DATE, (case when SUM(sm.stock_on_hand) < 0 then 0 Else SUM("
    "sm.stock_on_hand) END)  AS stock_on_hand From SM_HM_Stock sm (NOLOCK) Join "
    "bill.store_details_d store (NOLOCK) on sm.loc = store.location_code Join "
    "bill.item_hierarchy_d it (NOLOCK) on sm.item = it.Item_no WHERE LOWER(store.dc_city) IN ("
    "{city}) AND  LOWER(store.location_type) = 'store' AND store.isactive = 1 AND "
    "store.format   In ({{format}}) AND it.department IN ({{{{department}}}}) GROUP BY sm.loc, "
    "sm.item, sm.DATE ORDER BY sm.loc, sm.item, sm.DATE "
)
```

## Author
User 1

## Reviewed By
User 2

## Version
0.1
