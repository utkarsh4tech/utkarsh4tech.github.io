---
layout: post
title: "From Heat Transfer to Stock Options : An Engineer's Introduction"
date: 2025-10-07 09:00:00
description: Laying the groundwork for the Black-Scholes equation by starting with the basics of finance and options, all from an engineer's perspective.
tags: finance mechanical-engineering black-scholes options derivatives quantitative-finance
categories: "Quantitative-Finance"
giscus_comments: false
toc:
  sidebar: right
chart:
  plotly: true
pretty_table: true
---

# Introduction: Bridging Two Worlds

What if I told you that the same type of equation that describes heat flowing through a steel beam could also model the price of a stock option? It seems unlikely, but the mathematical frameworks are surprisingly similar. As engineers, we're trained to model complex systems, and it turns out that financial markets, in some ways, behave like the physical systems we already know.

> ### An Engineer's Edge
>
> This series will show you how to leverage your understanding of partial differential equations from thermodynamics to grasp one of the most important concepts in modern finance: the Black-Scholes equation. We'll start from first principles.

# The Absolute Basics: Stocks, Derivatives, and Options

Let's start with the fundamental building blocks.

- **Stock:** Think of a company as a massive, complex machine. The total value of this machine is its market capitalization. A "stock" is simply one tiny, identical, and ownable part of that machine. When a company holds an Initial Public Offering (IPO), it's making these parts available for public trading. The stock's price becomes an indicator of the market's collective valuation of the company's worth per share.

- **Derivative:** In engineering, we use derived units (like Watts, from Joules and seconds). Finance has a similar concept: the "derivative." A derivative is a financial instrument whose value depends on—or is _derived_ from—a more basic, underlying asset.

  - **Option:** This brings us to the star of our show: the stock option. An option is a specific type of derivative that depends on the underlying stock price. But unlike buying a stock directly, an option is a formal **contract** between a buyer and a seller. The buyer pays a fee, called a **premium**, for the rights granted by this contract. This allows the buyer to exercise their right to buy or sell when the stock price moves in their favor. The most important thing to remember is that exercising this contract is a **`right, not an obligation`**.

# The Two Flavors of Options: Calls and Puts

There are two primary types of option contracts.

| Option Type     |                                      Right Conferred                                       | Engineering Analogy                                                         |
| :-------------- | :----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------- |
| **Call Option** | The right to **Buy** an asset by a certain date (maturity) for a set price (strike price). | Locking in today's price for a future equipment purchase.                   |
| **Put Option**  |             The right to **Sell** an asset by a certain date for a set price.              | Buying an insurance policy against a drop in your equipment's market value. |

<br/>

The price specified in the contract is known as the **strike price (K)**, and the date is the **expiration date**.

# The Core Problem: Calculating a Fair Price

The payoff of an option at its expiration is its final value. Assuming we ignore the initial premium paid, the payoff is the financial gain you make from exercising the option. As shown in the figures below, which are based on your provided image, the payoff depends on the stock price ($S$) relative to the strike price ($K$).

```plotly
{

  "data": [

    {

      "x": [0, 50, 100],

      "y": [0, 0, 50],

      "type": "scatter",

      "mode": "lines",

      "line": {

        "color": "royalblue",

        "width": 3

      }

    }

  ],

  "layout": {

    "title": {

      "text": "Call Option Payoff"

    },

    "xaxis": {

      "title": "Stock Price (S)",

      "range": [0, 100],

      "zeroline": false,

      "fixedrange": true

    },

    "yaxis": {

      "title": "Payoff",

      "range": [0, 55],

      "fixedrange": true

    },

    "annotations": [

      {

        "x": 50,

        "y": -5,

        "text": "K",

        "showarrow": false,

        "font": {

          "size": 16

        }

      }

    ],

    "showlegend": false

  }

}
```

<div class="caption">
  Payoff diagram for call option as a function of stock price S at expiration. Here, the strike price K is 50.
</div>

```plotly
{

  "data": [

    {

      "x": [0, 50, 100],

      "y": [50, 0, 0],

      "type": "scatter",

      "mode": "lines",

      "line": {

        "color": "firebrick",

        "width": 3

      }

    }

  ],

  "layout": {

    "title": {

      "text": "Put Option Payoff"

    },

    "xaxis": {

      "title": "Stock Price (S)",

      "range": [0, 100],

      "zeroline": false,

      "fixedrange": true

    },

    "yaxis": {

      "title": "Payoff",

      "range": [0, 55],

      "fixedrange": true

    },

    "annotations": [

      {

        "x": 50,

        "y": -5,

        "text": "K",

        "showarrow": false,

        "font": {

          "size": 16

        }

      }

    ],

    "showlegend": false

  }

}
```

<div class="caption">
Payoff diagram for put option as a function of stock price S at expiration. Here, the strike price K is 50.
</div>

This brings us to the central challenge from a statistical and modeling perspective. The payoff is clear at expiration, but what is the option worth _before_ that date?

> How much premium should you pay to buy an option that will hedge against a potential loss or provide a chance for gain? In other words, what is the fair value of the option _today_ ?

# The Black-Scholes Equation Revealed

This is precisely the problem the Black-Scholes model was created to solve. It provides a theoretical estimate for the price of European-style options. We will not solve it yet, but here is the famous equation in all its glory:

$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS \frac{\partial V}{\partial S} - rV = 0
$$

Where:

- $V$ is the price of the option as a function of stock price $S$ and time $t$.
- $\sigma$ is the volatility of the stock's returns.
- $r$ is the risk-free interest rate.

# The "Aha!" Moment

<img
src="https://upload.wikimedia.org/wikipedia/en/7/79/Roll_Safe_meme.jpg?20230815000355" >

Now, for the connection. Does this equation look vaguely familiar? Consider the one-dimensional heat equation from thermodynamics, which describes how temperature ( $T$ ) distributes over a spatial dimension ( $x$ ) through time ( $t$ ):

$$
\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}
$$

While not identical, the fundamental structure — a first derivative in time related to a second derivative in another variable — is present in both. This remarkable similarity is the key we will exploit to find a solution.

<hr>

We've covered the essential financial vocabulary and introduced our main equation. In the next post, we will take a deep dive into **solving the 1-D heat equation** to prepare ourselves for the final step: transforming it to solve the Black-Scholes equation.
