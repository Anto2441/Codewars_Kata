function evaporator(content, evap_per_day, threshold) {
  let remaining = content;
  let day = 0;
  const minContent = (threshold / 100) * content;

  while (remaining > minContent) {
    remaining *= (1 - evap_per_day / 100);
    day++;
  }

  return day;
}
