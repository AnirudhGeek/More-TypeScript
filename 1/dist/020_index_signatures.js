"use strict";
const counters = {};
// counters['Likes'] = "asdf"   here we'll get error
// counters['Likes'] = true   here we'll get error
counters['Likes'] = 3454; //here we'll not get error
counters["Comments"] = 2;
counters["shares"] = 100;
const mm = { likes: 3, shares: 34, views: 2435 };
//when you will have dynamic keys you will use map instead of record 
const priceMap = new Map();
priceMap.set('likes', 45);
const lm = {};
lm["x"] = undefined;
lm['y'] = undefined;
