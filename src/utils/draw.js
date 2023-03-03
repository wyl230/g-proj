// 定义自己绘制的组件，试用前需要先注册
export function my_compoent(pen, ctx) {
  const path = !ctx ? new Path2D() : ctx;
  const { x, y, width, height } = pen.calculative.worldRect;
  path.moveTo(x, y);

  path.lineTo(x+width, y);
  path.lineTo(x + width, y + height);
  path.lineTo(x, y+height);

  path.closePath();
  if (path instanceof Path2D) return path;
}

export function only_text(pen, ctx) {

}

export function only_text_Anchors(pen) {

  const anchors = [];

  anchors.push({

  });
  pen.anchors = anchors;
}
// x轴为横轴
export function my_compoent_Anchors(pen) {
  const anchors = [];
  anchors.push({
    id: '0',
    penId: pen.id,
    x: 0.5,
    y: 0,
  });

  anchors.push({
    id: '1',
    penId: pen.id,
    x: 1,
    y: 0.5,
  });

  anchors.push({
    id: '2',
    penId: pen.id,
    x: 0,
    y: 0.5,
  });
  pen.anchors = anchors;
}
