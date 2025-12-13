export function heartShape(count) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const t = Math.random() * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);
    positions.push(x * 0.03, y * 0.03, (Math.random() - 0.5));
  }
  return positions;
}

export function flowerShape(count) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.sin(5 * a);
    positions.push(
      Math.cos(a) * r,
      Math.sin(a) * r,
      (Math.random() - 0.5)
    );
  }
  return positions;
}

export function saturnShape(count) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * 1.2 + 0.6;
    positions.push(
      Math.cos(a) * r,
      (Math.random() - 0.5) * 0.2,
      Math.sin(a) * r
    );
  }
  return positions;
}
