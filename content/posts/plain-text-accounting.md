--- 
title: Plain Text Accounting
date: 2022-11-27
tags: ['post'] 
---

I'm writing this as I go through the process of determining a personal
finance/accounting system that I'm happy with. If you know me or my relationship
with neovim then this journey might seem pretty common for me, but I thought it
would be a good indication of how I handle my life. 

## How We Got Here

I'm just about ~~two~~ four months out of college life and have been met with a wave of
products I have to use as an adult that have made me want to pay taxes
towards a program purely focused on improvement of the UX of websites. Just go
through the top 1000 most visited websites of all time and offer to overhaul
their UI/UX by experts. 

One such task has been managing my money. Now, I have a few different bank
accounts, investment accounts, credit cards, and money sharing apps like venmo.
A lot of what I have had to rely on for managing my money has been looking at
the individual trackers in each service. Some credit cards would have spending
reports that broke things down great, but not all of my accounts would and they
would always be in isolation of each other. If I saw money going in or out of an
account I couldn't easily correlate it to spending on a card or sharing money
with a friend for groceries. 

I've tried a few times to track all of them in a spreadsheet, but keeping it in
sync and having good views for everything was something I never once kept up
with. Every time was a completely new table or graph. I've tried 
notion and made a decent dashboard, but still couldn't manage a good way of syncing the data. I've also
tried it out with tools like mint mobile, personal capital, and sofi, but often
times whatever api their using to access my accounts (like Plaid) would become
unconnected or they still didn't really have the right UI I wanted with enough
views. 

So, I had two distinct problems. I wanted easy access to my financial data and I
wanted a good UI to explain my situation to me. So while trying to find a
solution and reading more about [#lifeblogging](https://beepb00p.xyz/tags.html#lifelogging) I decided to make my own personal system. 

## Research

There were a few concepts I encountered while browsing the internet that
inspired this. The first was that I realized that every financial app just uses
the [Plaid API](https://plaid.com/) and I can get access to that API too. The
other learning was the existence of command line accounting tools like
[ledger-cli](https://www.ledger-cli.org/) and the whole
[plaintextaccounting.com](https://plaintextaccounting.com) idea. I wanted to do
more lifelogging anyways so I thought this is something I can do. 

Getting the data doesn't seem so much like an issue since I have some confidence
that Plaid will work fine, so instead I first wanted to look into how to process
and display the data. Besides [ledger-cli](https://www.ledger-cli.org/), I also
found that there was [hledger](https://hledger.org/), and [beancount](https://github.com/beancount/beancount).
All of them started talking about this idea of double-entry accounting so I figured I should read up on that a bit more first. 

### Double-entry Accounting

So, according to investopedia. 

> Double entry, a fundamental concept underlying present-day bookkeeping and accounting,
states that every financial transaction has equal and opposite effects in at least two different accounts.

This makes sense, and I think it's the kind of view I've been missing for a while. I
want to be able to see the context of my transactions and the impact on my
overall assets. At least as one of my views. I like being able to see a
transaction's effect on one account, but I also like the option of seeing the
full impact. 

---

Ok, so back to the data processing tools. I know that I definitely want to use
something to process the data instead of just taking the **Plaid** data and
trying to process it with numpy...or at least try it out before resorting to that.
So obviously there's been a lot of work done in this space so I want to do some
research before picking one to try. 

I like to use GitHub awesome-lists when researching stuff like this. So let's
look at [awesome-ledger](https://github.com/sfischer13/awesome-ledger). That
took me to the [plaintextaccounting](https://plaintextaccounting.org/) website,
which had a really useful table. Looks like the 3 platforms I mentioned before
were the ones to compare the most. The things I'm looking for are: a good
community, a lot of control and composability with the tool, a good ecosystem of
plugins and "prior art."

Now I know [karlikoss](https://beepb00p.xyz/my-data.html#hsbc) uses `hledger`,
and they've got cool content. From what I can tell, a lot of the features of hledger
and ledger-cli seem to be identical, while beancount seems to be quite different. So I decided to 
go with the ledger ecosystem and just explore **hledger** more. 

## hledger

I did some initial research, and it looks the like the following are some of the
best tutorials for how to set up a ledger journal. 

* [hledger manual](https://hledger.org/1.27/hledger.html)
* [full fledged hledger](https://github.com/adept/full-fledged-hledger)

Most of the examples and gotchas, I was able to troubleshoot using these two
sources. Otherwise, for one off, questions I usually found a reddit or hacker news
thread that covered my use case. Both of these sources do a fantastic job
explaining how to use hledger so I don't want to attempt to rehash their
content, I just recommend checking them out for a comprehensive tutorial. 

Instead, I just want to assert some mental models that helped me in getting used
to double-entry accounting and some "gotchas" that I encountered. 

### Mental Model & Account Setup

The main idea I had to wrap my head around was the concept that all money comes
from somewhere. You can kind of think of it as a law of conservation. No money
is created or destroyed, just moved (unless you have access to a mint I guess).

So what does that mean? Well usually when you're looking at your accounts you
can see a transaction and think ok I've lost (spent) some money, or maybe you get
paid from your job and the balance goes up. In this model, you're really only
looking at your accounts in a vacuum when in reality they exist alongside all
the other money in circulation. So when you spend money, you're actually moving
money to someone else's account and similarly when you get paid you move money
from someone else's account to yours. 

So how does this apply to double-entry accounting? I can't keep track of every
account in the world that money is moving between, I really only care about my
money. Sure, but it's a helpful concept when organizing your accounts in ledger. The ledger documentation
recommends splitting up accounts into the following categories:

The first two types are accounts *you* control. 

* **Assets** - Essentially the money you hold. Often a bank or maybe some kind
of investment
* **Liabilities** - Think of this like debts. In my case, I used this for credit
cards and their current balances. These accounts usually have a 0 or negative
value. 

The next two accounts are external to you. 

* **Income** - Think of these as accounts that move money into yours. You can
set up an account for a job or maybe peer-to-peer payments. 
* **Expenses** - And then these are accounts that you move money too when you
buy things. 

You can have an unlimited number of accounts, but it helps to categorize them
the above taxonomy. An example setup might look like so. 


```bash
assets:bank1
assets:bank2
assets:investments
liabilities:credit-card-one
liabilities:credit-card-two
income:job
income:misc
expenses:groceries
expenses:rent
expenses:subscriptions
expenses:misc
```
You don't need to have multiple **income** or **expense** accounts. You could
generalize and just have one for each type of money movement, but ledger gives
you the flexibility of being as specific or vague as you want. In my example, I
set up a few accounts for typical expenses, but then also added one for
miscellaneous expenses that don't really warrant a whole other category. 

### Gotcha: Transfers

Now the main gotcha I encountered when going through my transactions was the
concept of transfers. For example, If I have both a checking and a savings
account I may want to transfer from my savings to my checking for whatever
reason. Now in double entry accounting for every transaction you enter two
accounts the source and destination. But, if you try to import transactions from
your accounts you'll see transactions in both accounts involved. This will lead
to the transfer being double counted. 

The solution to this is to introduce an intermediary account for transfers whose
balance should always functionally be 0. When it isn't 0 that is usually an
indication of an accounting error. 

This idea is explained in detail in the [fully fledged hledger](https://github.com/adept/full-fledged-hledger/wiki/Adding-more-accounts#lets-make-sure-that-transfers-are-not-double-counted)

---

This post is getting pretty long, and I want to talk about some other concepts
like how to get data from my banks into ledger and how to automatically sync it.
So I'm going to break it out into another post. Look out for a part 2!
