 remove(index) {
    this.animation = brokenBoatAnimation;
    this.speed = 0.05;
    this.width = 300;
    this.height = 300;
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    }, 2000);
  }
