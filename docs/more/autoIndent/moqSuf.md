---
id: moqSuf
title: Moq Suf
sidebar_label: Moq Suf
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
"select store as loc,item,min_indent_qty,suf,suf_status, min_indent_qty_status from ganit.auto_indent (" "NOLOCK) where store_status = 'A' AND item_status = 'A' AND store IN ((SELECT location_code AS loc FROM " "bill.store_details_d (NOLOCK) WHERE LOWER(dc_city) IN ({city}) AND (LOWER(location_type) = 'store')AND " "isactive = 1 AND format in ({{format}}))) order by loc,item asc "
```

## Author
User 1

## Reviewed By
User 2

## Version
0.1
