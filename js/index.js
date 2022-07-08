// document.querySelector('button').onclick = function () {
//   let diameter = prompt('Please enter the diameter of cirlce');
//   console.log(diameter);

//   for (let i = 0; i < 100; i++) {
//     const div = document.createElement('div');
//     div.className = 'circle';
//     div.style.width = `${diameter}px`;
//     div.style.height = `${diameter}px`;
//     div.style.borderRadius = '50%';
//     div.style.display = 'inline-block';
//     div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
//     document.body.prepend(div);
//   }
//   const [...divs] = document.getElementsByTagName('div');
//   divs.forEach((e) => {
//     e.onclick = function () {
//       e.remove();
//     };
//   });
// };

document.querySelector('button').onclick = function () {
  const newButton = document.createElement('button');
  newButton.className = 'btn';
  newButton.type = 'button';
  newButton.textContent = 'Draw';
  document.body.append(newButton);

  const userInput = document.createElement('input');
  userInput.value = 10;
  userInput.placeholder = "Enter the circle's diameter";
  document.body.append(userInput);

  newButton.onclick = function () {
    let diameter = document.querySelector('input').value;
    for (let i = 0; i < 100; i++) {
      const div = document.createElement('div');
      div.className = 'circle';
      div.style.width = `${diameter}px`; //
      div.style.height = `${diameter}px`; //
      div.style.borderRadius = '50%';
      div.style.display = 'inline-block';
      div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
      document.body.prepend(div);
      // console.log(diameter);
    }
    const [...divs] = document.getElementsByTagName('div');
    divs.forEach((e) => {
      e.onclick = function () {
        e.remove();
      };
    });
  };
};
