---
id: avgSalesLastThreeWeekDays
title: Average Sales Last Three Week Days
sidebar_label: Average Sales Last Three Week Days
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
"WITH max_sales AS (SELECT itm1.location_code,itm1.item_no,(sum(itm1.bill_qty)) " "sales,trunc(itm1.tran_datetime) as date FROM bill.hm_tran_f itm1 (nolock) WHERE " "trunc(itm1.tran_datetime) IN({date})AND(bill_qty >= 0) AND tran_type = 'SALE' " "AND sub_tran_type = 'OFFLIN' AND (location_code IN(SELECT location_code AS loc " "FROM bill.store_details_d WHERE lower(dc_city) IN({{city}}) AND(lower( " "location_type) = 'store') AND isactive = 1 AND format IN({{{{format}}}}))) AND (" "item_no IN(SELECT item_no FROM bill.item_hierarchy_d WHERE department IN({{{{{{{" "{department}}}}}}}}))) GROUP BY Itm1.location_code,Itm1.item_no,date UNION " "SELECT Itm1.location_code,Itm1.item_no,(SUM(Itm1.bill_qty)) as Sales, " "trunc(itm1.tran_datetime) as date FROM bill.sm_tran_f itm1 (NOLOCK) WHERE TRUNC(" "Itm1.tran_datetime)IN({date}) AND (bill_qty >= 0) AND tran_type = 'SALE' AND " "sub_tran_type = 'OFFLIN' AND (location_code IN(SELECT location_code AS loc FROM " "bill.store_details_d WHERE lower(dc_city) IN({{city}}) AND(lower(location_type) = " "'store') AND isactive = 1 AND format IN({{{{format}}}}))) AND(item_no IN(SELECT " "item_no FROM bill.item_hierarchy_d  WHERE department IN (  {{{{{{{{" "department}}}}}}}}))) GROUP BY Itm1.location_code, Itm1.item_no,date) SELECT " "location_code,item_no,max(sales) as max_sales FROM max_sales GROUP BY " "location_code, item_no ORDER BY location_code, item_no "
```

## Author
User 1

## Reviewed By
User 2

## Version
0.1
