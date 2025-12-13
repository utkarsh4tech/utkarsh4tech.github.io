---
layout: post
title: "Solving Black-Scholes: The Heat Equation Shortcut"
date: 2025-10-22 09:00:00
description: A rigorous step-by-step derivation transforming the Black-Scholes PDE into the Heat Equation.
tags: finance math partial-differential-equations heat-equation black-scholes
categories: "Quantitative-Finance"
giscus_comments: false
toc:
  sidebar: right
chart:
  plotly: true
pretty_table: true
---

## Introduction: The Engineer's Shortcut

In our previous post, we established the intuitive link between heat transfer and stock options. Now, we are going to do the heavy lifting. We will take the Nobel Prize-winning **Black-Scholes equation**:

$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS \frac{\partial V}{\partial S} - rV = 0
$$

To solve this, we will perform a series of coordinate transformations to reduce it to the constant-coefficient **Heat Equation**.

## Step 1: Reversing Time ($\tau$) & Renaming Variables ($\tilde{V}, \tilde{S}$)

The Black-Scholes equation is a "backward" equation: we know the payoff at expiration ($t=T$) and need to find the price today. To fix this, we reverse time.

We define $\tau$ as the **time to maturity**:

$$
\tau = T - t
$$

Consequently, the differential operator changes sign ($\frac{\partial \tau}{\partial t} = -1$).

To be mathematically precise, we must also rename our dependent variables to reflect this new time domain. We define $\tilde{S}$ and $\tilde{V}$ as the stock price and option value in this reversed time:

$$
S_t \equiv \tilde{S}_\tau \quad \text{and} \quad V_t \equiv \tilde{V}_\tau
$$

The time derivative transformation becomes:

$$
\frac{\partial V}{\partial t} = \frac{\partial \tilde{V}}{\partial \tau} \frac{\partial \tau}{\partial t} = -\frac{\partial \tilde{V}}{\partial \tau}
$$

and the equation now becomes :

$$
- \frac{\partial \tilde{V}}{\partial \tau} + \frac{1}{2}\sigma^2 \tilde{S}^2 \frac{\partial^2 \tilde{V}}{\partial \tilde{S}^2} + r\tilde{S} \frac{\partial \tilde{V}}{\partial \tilde{S}} - r\tilde{V} = 0
$$

## Step 2: The Space Transformation ($x$)

Stock prices follow geometric Brownian motion (exponential), but the Heat Equation is linear. We linearize the space by switching to logarithmic coordinates. We define a new variable $x$:

$$
x = \ln \tilde{S}_\tau + \left( r - \frac{1}{2}\sigma^2 \right)\tau
$$

We now define the option value in this new coordinate system as $v(x, \tau)$, such that $v(x, \tau) = \tilde{V}(\tilde{S}, \tau)$.

### Transforming the Spatial Derivatives

We need to convert the derivatives with respect to $\tilde{S}$ into derivatives with respect to $x$.
Using the chain rule (where $\frac{\partial x}{\partial \tilde{S}} = \frac{1}{\tilde{S}}$):

$$
\frac{\partial \tilde{V}}{\partial \tilde{S}} = \frac{\partial v}{\partial x} \frac{\partial x}{\partial \tilde{S}} = \frac{1}{\tilde{S}} \frac{\partial v}{\partial x}
$$

For the second derivative, we apply the product rule:

$$
\frac{\partial^2 \tilde{V}}{\partial \tilde{S}^2} = \frac{\partial}{\partial \tilde{S}} \left( \frac{1}{\tilde{S}} \frac{\partial v}{\partial x} \right) = -\frac{1}{\tilde{S}^2}\frac{\partial v}{\partial x} + \frac{1}{\tilde{S}} \frac{\partial}{\partial \tilde{S}}\left( \frac{\partial v}{\partial x} \right)
$$

$$
\frac{\partial^2 \tilde{V}}{\partial \tilde{S}^2} = \frac{1}{\tilde{S}^2} \left( \frac{\partial^2 v}{\partial x^2} - \frac{\partial v}{\partial x} \right)
$$

### Transforming the Time Derivative (The Tricky Part)

Because $x$ is a function of $\tau$ (see the definition of $x$ above), we cannot just swap $\partial \tau$. We must use the **total derivative**.

$$
\frac{\partial \tilde{V}}{\partial \tau} = \frac{\partial v}{\partial \tau} + \frac{\partial v}{\partial x} \underbrace{\frac{\partial x}{\partial \tau}}_{(r - \frac{1}{2}\sigma^2)}
$$

Substituting the known value of $\frac{\partial x}{\partial \tau}$:

$$
\frac{\partial \tilde{V}}{\partial \tau} = \frac{\partial v}{\partial \tau} + \left( r - \frac{1}{2}\sigma^2 \right) \frac{\partial v}{\partial x}
$$

## Step 3: Substitution and Cancellation

Now we plug all these transformed terms back into the original Black-Scholes PDE.

$$
-\left[ \frac{\partial v}{\partial \tau} + (r - \frac{1}{2}\sigma^2)\frac{\partial v}{\partial x} \right] + \frac{1}{2}\sigma^2 \tilde{S}^2 \left[ \frac{1}{\tilde{S}^2} \left( \frac{\partial^2 v}{\partial x^2} - \frac{\partial v}{\partial x} \right) \right] + r\tilde{S} \left[ \frac{1}{\tilde{S}} \frac{\partial v}{\partial x} \right] - rv = 0
$$

This looks messy, but watch what happens when we expand it. The $\tilde{S}$ and $\tilde{S}^2$ terms cancel out with the $1/\tilde{S}$ and $1/\tilde{S}^2$ terms.

$$
-\frac{\partial v}{\partial \tau} - \left( r - \frac{1}{2}\sigma^2 \right)\frac{\partial v}{\partial x} + \frac{1}{2}\sigma^2 \frac{\partial^2 v}{\partial x^2} - \frac{1}{2}\sigma^2 \frac{\partial v}{\partial x} + r \frac{\partial v}{\partial x} - rv = 0
$$

Structuring the terms by derivative:

1.  **$\frac{\partial v}{\partial x}$ terms:** $-(r - 0.5\sigma^2) - 0.5\sigma^2 + r = 0$. **They vanish!**
2.  **Remaining terms:**

$$
-\frac{\partial v}{\partial \tau} + \frac{1}{2}\sigma^2 \frac{\partial^2 v}{\partial x^2} - rv = 0
$$

## Step 4: Removing the Interest Rate ($F$)

We are left with a diffusion equation that still has a reaction term ($-rv$). To remove this, we transform our option price variable $v$ into a forward price variable $F$:

$$
F(x, \tau) = v(x, \tau) e^{r\tau} \quad \implies \quad v = F e^{-r\tau}
$$

We compute the derivatives for this final substitution:

$$
\frac{\partial v}{\partial \tau} = e^{-r\tau} \frac{\partial F}{\partial \tau} - r e^{-r\tau} F
$$

$$
\frac{\partial^2 v}{\partial x^2} = e^{-r\tau} \frac{\partial^2 F}{\partial x^2}
$$

Substituting these into our intermediate equation:

$$
-\left( e^{-r\tau} \frac{\partial F}{\partial \tau} - r e^{-r\tau} F \right) + \frac{1}{2}\sigma^2 e^{-r\tau} \frac{\partial^2 F}{\partial x^2} - r (F e^{-r\tau}) = 0
$$

The terms $+r F e^{-r\tau}$ and $-r F e^{-r\tau}$ cancel each other out perfectly.

## The Grand Finale: The Heat Equation

Dividing the entire equation by $-e^{-r\tau}$, we arrive at the standard Heat Equation:

$$
\frac{\partial F}{\partial \tau} = \frac{1}{2}\sigma^2 \frac{\partial^2 F}{\partial x^2}
$$

- **Diffusion Coefficient ($\alpha$):** $\frac{1}{2}\sigma^2$
- **Initial Condition (at $\tau=0$):** The payoff function $\max(e^x - K, 0)$

We have successfully transformed the complex financial PDE into the most well-understood equation in thermodynamics.
