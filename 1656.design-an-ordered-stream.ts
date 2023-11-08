class OrderedStream {
  storage: Array<string>
  pointer: number

  constructor(n: number) {
    this.storage = new Array(n).fill(null);
    this.pointer = 0;
  }

  insert(idKey: number, value: string): string[] {
    this.storage[idKey - 1] = value;
    const returned: Array<string> = [];

    while (true) {
      const currentValue = this.storage[this.pointer];
      if (!currentValue) return returned;
      returned.push(currentValue);
      this.pointer++;
    }
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */