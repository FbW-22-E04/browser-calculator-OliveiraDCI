"use strict";

const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");

a1.addEventListener("input", (e) => {
  const n1 = parseFloat(a1.value);
  const n2 = parseFloat(a2.value) || 0;

  const sum = n1 + n2;
  a3.value = sum;
});

a1.addEventListener("keydown", (event) => {
  if (event.key === "Enter") a2.focus();
});

a2.addEventListener("keydown", (event) => {
  if (event.key === "Enter") a1.focus();
});

a2.addEventListener("input", (e) => {
  const n1 = parseFloat(a1.value) || 0;
  const n2 = parseFloat(a2.value);

  const sum = n1 + n2;
  a3.value = sum;
});

// Subtraction

const s1 = document.querySelector("#s1");
const s2 = document.querySelector("#s2");
const s3 = document.querySelector("#s3");

s1.addEventListener("input", (e) => {
  const n1 = parseFloat(s1.value);
  const n2 = parseFloat(s2.value) || 0;

  const subtr = n1 - n2;
  s3.value = subtr;
});

s1.addEventListener("keydown", (event) => {
  if (event.key === "Enter") s2.focus();
});

s2.addEventListener("keydown", (event) => {
  if (event.key === "Enter") s1.focus();
});

s2.addEventListener("input", (e) => {
  const n1 = parseFloat(s1.value) || 0;
  const n2 = parseFloat(s2.value);

  const subtr = n1 - n2;
  s3.value = subtr;
});

// Multiplication

const m1 = document.querySelector("#m1");
const m2 = document.querySelector("#m2");
const m3 = document.querySelector("#m3");

m1.addEventListener("input", (e) => {
  const n1 = parseFloat(m1.value);
  const n2 = parseFloat(m2.value) || 0;

  const multi = n1 * n2;
  m3.value = multi;
});

m1.addEventListener("keydown", (event) => {
  if (event.key === "Enter") m2.focus();
});

m2.addEventListener("keydown", (event) => {
  if (event.key === "Enter") m1.focus();
});

m2.addEventListener("input", (e) => {
  const n1 = parseFloat(m1.value) || 0;
  const n2 = parseFloat(m2.value);

  const multi = n1 * n2;
  m3.value = multi;
});

// Division

const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");

d1.addEventListener("input", (e) => {
  const n1 = parseFloat(d1.value);
  const n2 = parseFloat(d2.value) || 0;

  const divis = n1 / n2;
  d3.value = divis;
});

d1.addEventListener("keydown", (event) => {
  if (event.key === "Enter") d2.focus();
});

d2.addEventListener("keydown", (event) => {
  if (event.key === "Enter") d1.focus();
});

d2.addEventListener("input", (e) => {
  const n1 = parseFloat(d1.value) || 0;
  const n2 = parseFloat(d2.value);

  const divis = n1 / n2;
  d3.value = divis;
});

// Modulo

const mod1 = document.querySelector("#mod1");
const mod2 = document.querySelector("#mod2");
const mod3 = document.querySelector("#mod3");

mod1.addEventListener("input", (e) => {
  const n1 = parseFloat(mod1.value);
  const n2 = parseFloat(mod2.value) || 0;

  const modulo = n1 % n2;
  mod3.value = modulo;
});

mod1.addEventListener("keydown", (event) => {
  if (event.key === "Enter") mod2.focus();
});

mod2.addEventListener("keydown", (event) => {
  if (event.key === "Enter") mod1.focus();
});

mod2.addEventListener("input", (e) => {
  const n1 = parseFloat(mod1.value) || 0;
  const n2 = parseFloat(mod2.value);

  const modulo = n1 % n2;
  mod3.value = modulo;
});
