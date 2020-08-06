---
id: avgSalesLastThirtyDays
title: Average Sales Last Thirty Days
sidebar_label: Average Sales Last Thirty Days
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
"SELECT location_code AS loc,item_no AS item, Sum(bill_qty)/30 AS sales_qty, ""Sum (bill_value)/30 AS realised_sales FROM bill.sm_tran_f WHERE trunc(""tran_datetime) >= %s AND (bill_qty >= 0) AND tran_type = 'SALE' AND sub_tran_type = ""'OFFLIN' AND (location_code IN (SELECT location_code AS loc FROM " "bill.store_details_d WHERE  Lower(dc_city) IN ( {city}) AND (Lower(" "location_type) = 'store') AND isactive = 1 AND format in ( {{format}}))) AND (item_no IN ( " "SELECT item_no FROM   bill.item_hierarchy_d WHERE  department IN ( {{{{department}}}}))) GROUP BY loc,item "
```

## Author
User 1

## Reviewed By
User 2

## Version
0.1
