//Barbossa and his three pirates found a treasure  of gold coins. Jack sparrow too joined them.
// They decided to share the treasure. Barbossa  agreed to give x % share for jack sparrow.
// He then decided to take y % share from the remaining treasure. His other pirates willl share equally the remaining gold coins.
// Write a function to compute their share's.

//Write a function to return calculate the of JackShare.
function find_JackShare(goldCoin, X, Y) {
  return (X / 100) * goldCoin;
}

//Write a function to retrun the  Barbossa share.
function find_BarbossaShare(goldCoin, X, Y) {
  return (goldCoin - find_JackShare(goldCoin, X, Y)) * (Y / 100);
}

//Write a function to retrun the other pirates share.
function find_OtherShare(goldCoin, X, Y) {
  return (
    (goldCoin -
      (find_JackShare(goldCoin, X, Y) + find_BarbossaShare(goldCoin, X, Y))) /
    3
  );
}
