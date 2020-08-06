---
id: actualIndent
title: Actual Indent
sidebar_label: Actual Indent
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
"(SELECT t1.loc AS loc, t1.item AS item, indent_date, dc_city, format, department, indent_qty FROM ((SELECT " \
    "loc, item, Trunc(indent_date) AS indent_date, SUM(indent_qty) AS indent_qty FROM bill.indent_f WHERE " \
    "indent_date BETWEEN %s AND %s GROUP BY loc, item, indent_date) t1 join(SELECT " \
    "location_code, dc_city, format FROM bill.store_details_d WHERE Lower(dc_city) IN ( {city}) AND ( Lower(" \
    "location_type) = 'store' ) AND isactive = 1 AND format in ({{format}})) t2 ON t2.location_code = t1.loc join (" \
    "SELECT item_no, department FROM bill.item_hierarchy_d WHERE department IN ( {{{{department}}}} )) t3 ON " \
    "t3.item_no = t1.item)) ORDER BY loc, item, indent_date, dc_city, format, department "
```

## Author
User 1

## Reviewed By
User 2

## Version
0.1
