---
title: Stimulus Check Calculator
subtitle: How much money am I getting for the first covid-19 stimulus check?
date: 2020-04-02T10:15:00+00:00
author: Matt Erickson (ME)
layout: post
permalink: /stimulus-calculator/
js: 'js/stimulusCalc.js'
gh-repo: Mutmatt/mutmatt.github.io/blob/master/js/stimulusCalc.js
tags:
  - taxes
  - $
  - quarantine
  - wat
---
I won't bore you with the details of how the math works out so just fill in the blanks. We won't be tracking data on this page so your information is safe.

Baseline stimulus check is $1,200 per person ($2,400 for married couple) and $500 per (dependent) child with income tiers.

<form>
  <div class="form-group" id="tax2019">
    <label for="filing-status">Did you file taxes in 2019 (yet)?</label>
    <div class="input-group">
      <button id="tax2019btn" type="button" class="btn btn-success tax-btn" data-toggle="button" aria-pressed="false">YES</button>
    </div>
  </div>
  <div class="form-group" id="tax2018" style="display:none">
    <label for="filing-status">Did you file taxes in 2018?</label>
    <div class="input-group">
      <button id="tax2018btn" type="button" class="btn btn-success tax-btn " data-toggle="button" aria-pressed="false">YES</button>
    </div>
  </div>
  <div class="form-group should-file-taxes">
    <label for="filing-status">Filing Status</label>
    <div class="input-group">
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" id="single" value="1" checked>Single
      </label>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" id="married" value="2">Married
      </label>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" id="hoh" value="1">Head of Household
      </label>
    </div>
  </div>
  <div class="form-group should-file-taxes">
    <label for="total-agi">Household Adjusted Gross Income</label>
    <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-usd"></i></span>
      <input id="total-agi" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value="0" type="number">
      <span class="input-group-addon">.00</span>
    </div>
  </div>
  <div class="form-group should-file-taxes">
    <label for="total-agi">How many dependent children, under 17 years of age, did you claim?</label>
    <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-child"></i></span>
      <input id="dependent-children" type="text" class="form-control" aria-label="How many dependent children" value="0" type="number">
    </div>
  </div>

  <div class="form-group">
    <label for="total-agi">Grand Total</label>
    <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-usd"></i></span>
      <input id="grand-total" type="text" class="form-control" aria-label="grand total" disabled>
    </div>
  </div>
  

</form>