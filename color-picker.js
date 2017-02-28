const createSlider = function(){
      const slider = {
        value: 0,
        node: undefined,
        oninput:(evt)=>{}
      };


      const block = document.createElement('div');
      const range = document.createElement('input');
      range.type="range";
      range.min = 0;
      range.max = 255;
      range.style.width= "300px";
      range.style.border = "thin dotted blue";
      range.style.margin = "5px";
      range.value = slider.value;
      block.appendChild(range);

      const label = document.createElement('span');
      label.innerHTML = slider.value;
      block.appendChild(label);

      slider.node = block;

      range.oninput = (evt)=>{
        slider.value = range.value;
        label.innerHTML = slider.value;
        slider.oninput(evt);
      };

      return slider;
    };

const createColorPicker = function(){
  const picker = {
    red: 0,
    green: 0,
    blue: 0,
    node: undefined,
    oninput:(evt)=>{}
  };

  const block = document.createElement("div");

  const colorBox = document.createElement("div");
  colorBox.style.width="200px";
  colorBox.style.height = "200px";
  colorBox.style.border = "thick dotted green";
  colorBox.style.margin = "47px";
  colorBox.style.padding = "1px";

  block.appendChild(colorBox);


    const red = createSlider();
    const green = createSlider();
    const blue = createSlider();

    block.appendChild(red.node);
    block.appendChild(green.node);
    block.appendChild(blue.node);

    picker.node = block;


    const update = () =>{
        picker.red = red.value;
        picker.green = green.value;
        picker.blue = blue.value
        colorBox.style.background = `rgb(${red.value},${green.value},${blue.value})`;
        picker.oninput()
      };
    red.oninput =update;
    green.oninput = update;
    blue.oninput = update;

    update();

  return picker;
};
