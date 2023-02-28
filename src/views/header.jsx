/*
 * @Description: 
 * 最上面一行
 */
import React, { useCallback, useEffect, useRef } from 'react';

const Header = () => {
  const penBtn = useRef(null);
  const pencilBtn = useRef(null);
  const magnifierBtn = useRef(null);
  const minimapBtn = useRef(null);

  const onCreate = useCallback(() => {
    window.meta2d.open();
  }, []);

  const onOpen = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        window.meta2d.open(json);
      } catch(e) {
        console.log('读取文件失败，请检查数据格式');
      }
    };
    reader.readAsText(file);
  }, []);

  const onSave = useCallback(() => {
    const filename = 'test_data.json';
    const data = window.meta2d.data();
    const json = JSON.stringify(data, undefined, 4);
    const blob = new Blob([ json ], { type: 'text/json' });
    const a = document.createElement('a');
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    a.click();
  }, []);

  const onTogglePen = useCallback(() => {
    pencilBtn.current.className = '';
    window.meta2d.finishPencil();
    penBtn.current.className = 'active';
    // window.meta2d.drawLine('curve'); // wyl 钢笔划线使用curve还是line or polyline
    window.meta2d.drawLine('polyline');
  }, []);

  const onTogglePencil = useCallback(() => {
    if (penBtn.current.className === 'active') {
      return;
    }
    if (pencilBtn.current.className === 'active') {
      pencilBtn.current.className = '';
      window.meta2d.finishPencil();
    } else {
      pencilBtn.current.className = 'active';
      window.meta2d.drawingPencil();
    }
  }, []);

  const onToggleMagnifier = useCallback(() => {
    if (magnifierBtn.current.className === 'active') {
      magnifierBtn.current.className = '';
      window.meta2d.hideMagnifier();
    } else {
      magnifierBtn.current.className = 'active';
      window.meta2d.showMagnifier();
    }
  }, []);

  const onToggleMinimap = useCallback(() => {
    if (minimapBtn.current.className === 'active') {
      minimapBtn.current.className = '';
      window.meta2d.hideMap();
    } else {
      minimapBtn.current.className = 'active';
      window.meta2d.showMap();
    }
  }, []);

  const onTest_interface = useCallback(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('http://162.105.85.214:8000/test_interface', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));

    // window.open('http://162.105.85.214:8000/test_interface');
    alert('已发送post请求');
  }, []);

  const on_3d_show = useCallback(() => {
    window.open('http://162.105.85.214:8000/3d_show');
  })

  const onHelp = useCallback(() => {
    // window.open('https://www.yuque.com/alsmile/topology/cucep0');
    window.open('./help.html');
  }, []);

  const onKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'b':
      case 'B':
        if (window.meta2d.canvas.pencil) {
          pencilBtn.current.className = 'active';
        } else {
          pencilBtn.current.className = '';
        }
        break;
      case 'v':
      case 'V':
        if (e.ctrlKey || e.metaKey) {
          return;
        } else {
          if (window.meta2d.canvas.drawingLineName) {
            penBtn.current.className = 'active';
          } else {
            penBtn.current.className = '';
          }
        }
        break;
      case 'm':
      case 'M':
        if (window.meta2d.canvas.magnifier) {
          minimapBtn.current.className = 'active';
        } else {
          minimapBtn.current.className = '';
        }
        break;
      case 'Escape':
        penBtn.current.className = '';
        pencilBtn.current.className = '';
        magnifierBtn.current.className = '';
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, []);

  return (
    <div className="header" >
      <div className="logo" >
        <img src='/favicon.ico' alt="乐吾乐" />
      </div>
      <div className="button-group" >
        <button class='button-3' id="create" onClick = { onCreate } >新建文件</button>
        <button class='button-3' id="open" >
          打开文件
          <input id="open-input" type="file" onChange = { onOpen } />
        </button>

        <button class='button-3' id="save" onClick = { onSave } >保存</button>
        <button class='button-3' id="pen" onClick = { onTogglePen } ref = { penBtn } >折线</button>
        <button class='button-3' id="pencil" onClick = { onTogglePencil } ref = { pencilBtn } >曲线</button>
        <button class='button-3' id="magnifier" onClick = { onToggleMagnifier } ref = { magnifierBtn } >放大镜</button>
        <button class='button-3' id="minimap" onClick = { onToggleMinimap } ref = { minimapBtn } >缩略图</button>
        <button class='button-3' id="help" onClick = { onHelp } >帮助</button>
        <button class='button-3' id="test_interface" onClick = { onTest_interface } >接口测试</button>
        <button class='button-3' id="test_interface" onClick = { onTest_interface } >生成IDL文件</button>
        <button class='button-3' id="test_interface" onClick = { onTest_interface } >IDL2C</button>
        <button class='button-3' id="test_interface" onClick = { onTest_interface } >to_FPGA</button>
        <button class='button-3' id="3d_show" onClick = { on_3d_show } >产品展示界面</button>
      </div>
    </div>
  );
};

export default Header;
