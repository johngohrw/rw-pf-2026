export type Point = { x: number; y: number };
export type Box = { x: number; y: number; width: number; height: number };

export function relax(points: Point[], minDist = 8, iterations = 5) {
  const p = [...points];
  const minDistSq = minDist * minDist;

  for (let k = 0; k < iterations; k++) {
    for (let i = 0; i < p.length; i++) {
      for (let j = i + 1; j < p.length; j++) {
        const a = p[i];
        const b = p[j];

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < minDistSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const overlap = (minDist - dist) / 2;
          const nx = dx / dist;
          const ny = dy / dist;

          a.x -= nx * overlap;
          a.y -= ny * overlap;
          b.x += nx * overlap;
          b.y += ny * overlap;
        }
      }
    }
  }
  return p;
}

export function relaxWithForbidden(
  points: Point[],
  minDist = 12,
  forbidden: Box,
  iterations = 10
) {
  const pts = [...points];
  for (let i = 0; i < iterations; i++) {
    for (const p of points) {
      if (isInsideBox(p, forbidden)) {
        pushOutOfBox(p, forbidden);
      }
    }

    // spacing relaxation (from earlier)
    relax(points, minDist, 5);
  }
  return pts;
}

function isInsideBox(p: Point, box: Box) {
  return (
    p.x >= box.x &&
    p.x <= box.x + box.width &&
    p.y >= box.y &&
    p.y <= box.y + box.height
  );
}

function pushOutOfBox(p: Point, box: Box) {
  const left = p.x - box.x;
  const right = box.x + box.width - p.x;
  const top = p.y - box.y;
  const bottom = box.y + box.height - p.y;

  const min = Math.min(left, right, top, bottom);

  if (min === left) p.x = box.x;
  if (min === right) p.x = box.x + box.width;
  if (min === top) p.y = box.y;
  if (min === bottom) p.y = box.y + box.height;
}
