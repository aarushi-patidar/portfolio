export const circuitPath = 'M 165 440 L 780 440 C 850 440 880 400 846 348 L 795 278 C 769 242 790 207 836 190 L 900 167 C 958 152 961 108 922 86 C 882 64 823 76 775 105 L 646 184 C 603 210 560 193 535 155 L 508 115 C 485 81 449 76 421 99 L 342 161 C 301 194 289 231 321 265 L 374 319 C 405 351 390 386 346 393 L 226 410 C 184 416 156 389 172 357 L 209 287 C 229 249 207 224 172 231 C 126 241 105 275 121 312 L 156 383 C 168 406 146 428 118 429 C 92 430 82 440 82 440 C 82 465 105 476 133 464 Z';

export function getPathPosition(path, progress, offset = 0) {
  const length = path.getTotalLength();
  const point = path.getPointAtLength(length * progress);
  const tangent = path.getPointAtLength(Math.min(length, length * progress + 1));
  const angle = Math.atan2(tangent.y - point.y, tangent.x - point.x) * 180 / Math.PI;
  const radians = angle * Math.PI / 180;
  return {
    x: point.x - Math.sin(radians) * offset,
    y: point.y + Math.cos(radians) * offset,
    angle
  };
}
