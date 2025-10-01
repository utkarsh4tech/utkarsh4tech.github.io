---
layout: page
title: Statistics II - Extra Activity 1
---

## Activity Overview

This activity analyzes the daily stock market performance of `Apple Inc. (NASDAQ:AAPL)` for the first three quarters of 2025, from `January 1st to September 30th`. The goal was to collect live financial data, describe its structure, and identify interesting trends and observations using statistical thinking.

### Embedded Google Spreadsheet Data

  <iframe 
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRlvO0dONIOQ7CPztptd-qQ8xMKF4c6z88a8Ku6E_coDJwd_k86V_9trJeUB_MUdi1LzF0c5Z9d7GyP/pubhtml?widget=true&amp;headers=false"
  width="100%" 
  height="600"></iframe>

### Data Source & Collection Method

The data for this analysis was sourced directly from **Google Finance**, which provides real-time and historical financial market data.

The data was collected dynamically and automatically within Google Sheets itself by using the built-in `GOOGLEFINANCE` function. This powerful function allows for pulling current or historical securities data directly into a spreadsheet. The specific formula used was:
`=GOOGLEFINANCE("NASDAQ:AAPL", "all", DATE(2025,1,1), DATE(2025,9,30), "DAILY")`

This method ensured the data was accurate and formatted cleanly for immediate analysis.

### Understanding the Data

The dataset consists of over 180 rows, where each row represents a single trading day. The data has 6 columns, which are described as follows:

  * **Date:** The specific date of the trading day.
  * **Open:** The price of one share of AAPL stock when the NASDAQ market opened on that day.
  * **High:** The highest price that one share of AAPL reached during that trading day.
  * **Low:** The lowest price that one share of AAPL reached during that trading day.
  * **Close:** The final price of one share of AAPL when the NASDAQ market closed for the day. This is often used as the primary measure of a stock's value for a given day.
  * **Volume:** The total number of AAPL shares that were traded (bought and sold) during that day.

### Detailed Observations

From analyzing the daily stock data for Apple from January to September 2025, I made several interesting observations:

* **Observation 1: A Day of Extreme Volatility:** The data revealed that **April 09, 2025**, was a day of significant market activity. The stock price showed its highest intraday volatility on this date, fluctuating by **$28.72**. This suggests a major news event or announcement likely occurred, causing significant uncertainty and trading throughout the day.

* **Observation 2: Volume and Volatility Correlation:** Confirming the significance of that date, **April 09, 2025**, was also the day with the highest trading volume by far, with over **184 million** shares traded. This massive volume was coupled with a substantial price increase of **$26.90** from the opening bell to the closing bell. This strong correlation shows the market reacted decisively and positively to whatever news drove the activity on that day.

* **Observation 3: A Story of Two Halves:** The stock's performance told a story of two distinct halves. The first two quarters were challenging, with the stock declining by **-8.91% in Q1** and another **-8.07% in Q2**. However, there was a dramatic turnaround in the third quarter, which saw powerful growth of **22.52%**. This strong recovery in Q3 completely erased the earlier losses, resulting in a net gain of **4.42%** for the entire nine-month period.

* **Observation 4: Balanced Intraday Trading:** Over the entire period, the number of days the stock closed higher than it opened was **49.73%**. This is almost a perfect 50/50 split, which indicates that there was no consistent positive or negative bias during the trading hours themselves; the market was remarkably balanced day-to-day.

#### Methodology

I used python to do basic analysis, the code used was is as follows:

```python
import pandas as pd

file_path = '/content/STATS-2 Activity-1 - APPLE Stock.csv'
df = pd.read_csv(file_path)

# --- Data Cleaning and Preparation ---

# Clean up the 'Date' column to keep only the date part
df['Date'] = df['Date'].str.split(' ').str[0]

# Convert the 'Date' column to a proper datetime format
df['Date'] = pd.to_datetime(df['Date'], format='%d/%m/%Y')

# Set the 'Date' as the index for easier time-based analysis
df.set_index('Date', inplace=True)

# Drop the original 'ROW NUMBER' column
df.drop('ROW NUMBER', axis=1, inplace=True)

print("Data loaded and cleaned successfully.")

# 1. Volatility Analysis
df['Intraday_Volatility'] = df['High'] - df['Low']
max_volatility_day = df.loc[df['Intraday_Volatility'].idxmax()]
max_volatility_date = df['Intraday_Volatility'].idxmax().strftime('%B %d, %Y')
max_volatility_value = max_volatility_day['Intraday_Volatility']

# 2. Volume Spikes
max_volume_day = df.loc[df['Volume'].idxmax()]
max_volume_date = df['Volume'].idxmax().strftime('%B %d, %Y')
max_volume_value = max_volume_day['Volume']
price_change_on_max_volume_day = max_volume_day['Close'] - max_volume_day['Open']

# 3. Quarterly Growth Trend
q1_end = '2025-03-31'
q2_end = '2025-06-30'
q3_end = '2025-09-30'

# Get closing prices for each quarter
q1_close_start = df.loc[:q1_end].iloc[0]['Close']
q1_close_end = df.loc[:q1_end].iloc[-1]['Close']
q2_close_start = df.loc[q1_end:q2_end].iloc[1]['Close'] # Start from the next day
q2_close_end = df.loc[:q2_end].iloc[-1]['Close']
q3_close_start = df.loc[q2_end:q3_end].iloc[1]['Close'] # Start from the next day
q3_close_end = df.loc[:q3_end].iloc[-1]['Close']

# Calculate percentage growth
q1_growth = ((q1_close_end - q1_close_start) / q1_close_start) * 100
q2_growth = ((q2_close_end - q2_close_start) / q2_close_start) * 100
q3_growth = ((q3_close_end - q3_close_start) / q3_close_start) * 100
overall_growth = ((df.iloc[-1]['Close'] - df.iloc[0]['Close']) / df.iloc[0]['Close']) * 100

# 4. "Close" vs "Open" Relationship
days_positive_close = (df['Close'] > df['Open']).sum()
total_days = len(df)
percentage_positive_days = (days_positive_close / total_days) * 100

print("--- Analysis Results ---")
print("\n1. Volatility Analysis:")
print(f"Date with highest volatility: {max_volatility_date}")
print(f"Volatility value (High - Low): ${max_volatility_value:.2f}")

print("\n2. Volume Spikes:")
print(f"Date with highest volume: {max_volume_date}")
print(f"Volume on that day: {max_volume_value:,}")
print(f"Price change on that day (Close - Open): ${price_change_on_max_volume_day:.2f}")

print("\n3. Quarterly Growth Trend:")
print(f"Q1 (Jan-Mar) Growth: {q1_growth:.2f}%")
print(f"Q2 (Apr-Jun) Growth: {q2_growth:.2f}%")
print(f"Q3 (Jul-Sep) Growth: {q3_growth:.2f}%")
print(f"Overall Trend (Jan-Sep): {overall_growth:.2f}%")

print("\n4. 'Close' vs 'Open' Relationship:")
print(f"Percentage of days with Close > Open: {percentage_positive_days:.2f}%")
```

Output for the code:

```
--- Analysis Results ---

1. Volatility Analysis:
Date with highest volatility: April 09, 2025
Volatility value (High - Low): $28.72

2. Volume Spikes:
Date with highest volume: April 09, 2025
Volume on that day: 184,395,885.0
Price change on that day (Close - Open): $26.90

3. Quarterly Growth Trend:
Q1 (Jan-Mar) Growth: -8.91%
Q2 (Apr-Jun) Growth: -8.07%
Q3 (Jul-Sep) Growth: 22.52%
Overall Trend (Jan-Sep): 4.42%

4. 'Close' vs 'Open' Relationship:
Percentage of days with Close > Open: 49.73%
```
