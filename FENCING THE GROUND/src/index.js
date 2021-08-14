//The college ground is rectangular in shape. The Management decides to build a fence around the ground.
// In order to help the construction workers to build a straight fence, they planned to place a thick rope around the ground.
// They wanted to buy only the exact length of the rope that is needed.
// They also wanted to cover the entire ground with a thick carpet during rainy season.
// They wanted to buy only the exact quantity of carpet that is needed. They requested your help.

// Can you please help them by writing a function to find the exact length of the rope and the exact quantity of carper that is required?

// Write the function to retrun the exact length of the rope.
function find_length(Length, Width) {
  return 2 * (Length + Width);
}

// Write the function to retrun the exact quantity of carper that is required.
function find_carper(Length, Width) {
  return Length * Width;
}

//Use SpecRunner to check the Test Cases.
