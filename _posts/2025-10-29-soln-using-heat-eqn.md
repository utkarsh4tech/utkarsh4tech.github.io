---
layout: post
title: "Solving Black-Scholes: From Heat to Formula"
date: 2025-10-29 09:00:00
description: The final step—solving the Heat Equation integral using the exact mathematical framework from our derivation.
tags: finance math partial-differential-equations heat-equation black-scholes
categories: "Quantitative-Finance"
giscus_comments: false
toc:
  sidebar: right
chart:
  plotly: true
pretty_table: true
---

## Introduction: The Final Stretch

In Part 2, we performed a coordinate transformation to turn the Black-Scholes PDE into the **1D Heat Equation**:

$$
\frac{\partial F}{\partial \tau} = \frac{1}{2}\sigma^2 \frac{\partial^2 F}{\partial x^2}
$$

Now, we must solve it. Because this is the standard diffusion equation, we can use the fundamental solution (Green's Function). The value of the option $F(x, \tau)$ is simply the convolution of the initial condition (payoff) with the Gaussian heat kernel.

## 1. Setting Up the Integral

First, recall our transformed variables:

- $x = \ln(S) + (r - \frac{1}{2}\sigma^2)\tau$
- Payoff at $\tau=0$ (expiration): $F(z, 0) = \max(e^z - K, 0)$

The solution is given by the integral:

$$
F(x, \tau) = \int_{-\infty}^{\infty} F(z, 0) \frac{1}{\sqrt{2\pi \sigma^2 \tau}} e^{-\frac{(x-z)^2}{2\sigma^2 \tau}} dz
$$

Since the payoff $\max(e^z - K, 0)$ is only non-zero when $e^z > K$ (i.e., $z > \ln K$), we change the lower limit of integration to $\ln K$:

$$
F(x, \tau) = \int_{\ln K}^{\infty} (e^z - K) \frac{1}{\sqrt{2\pi \sigma^2 \tau}} e^{-\frac{(x-z)^2}{2\sigma^2 \tau}} dz
$$

We split this into two separate integrals, which we will solve individually:

$$
F(x, \tau) = \underbrace{\int_{\ln K}^{\infty} e^z \frac{1}{\sqrt{2\pi \sigma^2 \tau}} e^{-\frac{(x-z)^2}{2\sigma^2 \tau}} dz}_{\text{Term 1}} - K \underbrace{\int_{\ln K}^{\infty} \frac{1}{\sqrt{2\pi \sigma^2 \tau}} e^{-\frac{(x-z)^2}{2\sigma^2 \tau}} dz}_{\text{Term 2}}
$$

---

## 2. Solving Term 2: The Strike Term

Let's start with the second term.

$$
\text{Term 2} = K \int_{\ln K}^{\infty} \frac{1}{\sigma\sqrt{2\pi\tau}} e^{-\frac{(z-x)^2}{2\sigma^2 \tau}} dz
$$

We define a standard normal variable $Z$:

$$
Z = \frac{z - x}{\sigma\sqrt{\tau}} \quad \text{where} \quad z \sim N[x, \sigma^2\tau]
$$

We change the limit of integration. Since $z \ge \ln K$:

$$
x + \sigma\sqrt{\tau}Z \ge \ln K \implies Z \ge \frac{\ln K - x}{\sigma\sqrt{\tau}}
$$

Substituting these in:

$$
\text{Term 2} = K \int_{\frac{\ln K - x}{\sigma\sqrt{\tau}}}^{\infty} \frac{1}{\sqrt{2\pi}} e^{-\frac{Z^2}{2}} dZ
$$

Because the Normal distribution is symmetric, the area from a point $a$ to $\infty$ is the same as the area from $-\infty$ to $-a$. We define $-d_2$ as the lower limit:

$$
-d_2 = \frac{\ln K - x}{\sigma\sqrt{\tau}} \implies d_2 = \frac{x - \ln K}{\sigma\sqrt{\tau}}
$$

Thus, the integral becomes the Cumulative Distribution Function, $\Phi(d_2)$:

$$
\text{Term 2} = K \cdot \Phi(d_2)
$$

---

## 3. Solving Term 1: Completing the Square

Now for the first term. This is trickier because of the extra $e^z$ factor.

$$
\text{Term 1} = \int_{\ln K}^{\infty} e^z \frac{1}{\sigma\sqrt{2\pi \tau}} e^{-\frac{(z-x)^2}{2\sigma^2 \tau}} dz
$$

To solve this, we must combine the exponentials ($e^z$ and the Gaussian). We look at the exponent terms:

$$
\text{Exponent} = z - \frac{(z-x)^2}{2\sigma^2 \tau}
$$

We perform the algebra to **complete the square**:

$$
z - \frac{(z-x)^2}{2\sigma^2 \tau} = -\frac{(z - (x + \sigma^2\tau))^2}{2\sigma^2\tau} + \left(x + \frac{\sigma^2\tau}{2}\right)
$$

Essentially, the $e^z$ term shifts the mean of our distribution by exactly $\sigma^2\tau$.

$$
z \sim N[x + \sigma^2\tau, \sigma^2\tau]
$$

When we factor out the constants and solve the integral (just like we did for Term 2), we get a new limit $d_1$:

$$
d_1 = \frac{(x + \sigma^2\tau) - \ln K}{\sigma\sqrt{\tau}}
$$

And the final result for Term 1:

$$
\text{Term 1} = e^{x + \frac{\sigma^2\tau}{2}} \Phi(d_1)
$$

---

## 4. The Grand Unification

We now combine the terms to get the value of the transformed option $F$:

$$
F(x, \tau) = e^{x + \frac{\sigma^2 \tau}{2}} \Phi(d_1) - K \Phi(d_2)
$$

Finally, we must transform back to the real world variables. Recall our definitions:

1.  $V = e^{-r\tau}F$
2.  $x = \ln S + (r - \frac{1}{2}\sigma^2)\tau$

Substitute $F$ into the first equation:

$$
V = e^{-r\tau} \left[ e^{x + \frac{\sigma^2 \tau}{2}} \Phi(d_1) - K \Phi(d_2) \right]
$$

Now, look at the first term closely. Substitute $x$:

$$
e^{-r\tau} e^{\ln S + (r - \frac{1}{2}\sigma^2)\tau + \frac{\sigma^2 \tau}{2}}
$$

The terms in the exponent simplify beautifully:

- $-r\tau$ cancels $+r\tau$
- $-\frac{1}{2}\sigma^2 \tau$ cancels $+\frac{1}{2}\sigma^2 \tau$

We are left with $e^{\ln S}$, which is just $S$.

## Conclusion: The Black-Scholes Formula

Replacing $\tau$ with $T-t$, we arrive at the final pricing formula:

$$
C(S, t) = S \Phi(d_1) - K e^{-r(T-t)} \Phi(d_2)
$$

Where:

$$
d_1 = \frac{\ln(S/K) + (r + \frac{\sigma^2}{2})(T-t)}{\sigma\sqrt{T-t}}
$$

$$
d_2 = d_1 - \sigma\sqrt{T-t}
$$

We have successfully journeyed from the thermodynamics of heat diffusion to the pricing of financial derivatives, proving that the language of math is truly universal.
