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
      range.style.width= "300px"; //sets width of range to 300 pixels
      range.style.border = "thin dotted blue"; //border is thin-dotted and blue
      range.style.margin = "15px"; //sets margin to 15 pixels
      range.style.background = "mintcream"; //sets background color of range to mintcream
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
  colorBox.style.width="200px"; //sets width of colorBox to 200 pixels
  colorBox.style.height = "200px";//sets height of colorBox to 200 pixels
  colorBox.style.border = "thick dotted green"; //border is thin-dotted and blue
  colorBox.style.margin = "50px";
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
