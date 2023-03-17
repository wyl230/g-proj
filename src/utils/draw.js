// 1. 编写图形绘画函数
// 其中，calculative.worldRect为canvas的世界坐标。更多信息，参考 “架构” - “概要” 和 Pen 相关文档
export function my_compoent(ctx, pen) {
  // 在绘画中若更改了 ctx 的某个属性，例如：fillStyle, strokeStyle, lineWidth 等样式属性，需使用 save 和 restore
  // 注意 save restore 需要成对调用
  ctx.save();
  // 若在绘画函数中，配置了 ctx.strokeStyle or fillStyle ，那么画笔的 color or background 无法对它生效
  ctx.strokeStyle = '#1890ff';
  ctx.fillStyle =  'rgb(30% 80% 60% / 50%)';

  const { x, y, width, height } = pen.calculative.worldRect;

  ctx.moveTo(x, y);
  ctx.lineTo(x+width, y);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x, y+height);

  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.restore();
}

// 定义自己绘制的组件，试用前需要先注册
export function my_compoent_pim(pen, ctx) {
  const path = !ctx ? new Path2D() : ctx;
  const { x, y, width, height } = pen.calculative.worldRect;
  // path.roundRect(100, 100, 100, 100,10); // roundRect
  ctx = meta2d.canvas.canvas.getContext('2d');

  // ctx.moveTo(100, 100);
  // ctx.lineTo(20, 400);
  // ctx.lineTo(99, 400);
  // ctx.lineTo(90, 300);

  // ctx.fill();
  // ctx.stroke();


  console.log('path', path, ctx);
  path.moveTo(x, y);
  path.lineTo(x+width, y);
  path.lineTo(x + width, y + height);
  path.lineTo(x, y+height);
  // ctx.strokeStyle = "blue";
  // ctx.fillStyle = "blue";
  // ctx.fill(path, "blue");

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


export function interface_part(pen, ctx) {
  const path = !ctx ? new Path2D() : ctx;
  const { x, y, width, height } = pen.calculative.worldRect;
  ctx = meta2d.canvas.canvas.getContext('2d');


  console.log('path', path, ctx);
  path.moveTo(x, y);
  path.lineTo(x+width, y);
  path.lineTo(x + width, y + height);
  path.lineTo(x, y+height);

  path.closePath();
  if (path instanceof Path2D) return path;

}
// x轴为横轴
export function interface_part_Anchors(pen) {
  const anchors = [];
  anchors.push({
    id: '0',
    penId: pen.id,
    x: 0.5,
    y: 0.5,
  });
  pen.anchors = anchors;
}
