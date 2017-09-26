function cloneObiect(src) {
    var result;
    switch (toString.call(src)) {
      case '[object String]':
        result = src;
        break;
      case '[object Number]':
        result = src;
        break;
      case '[object Array]':
        var temp = [];
        for (var i = 0; i < src.length; i++) {
          // temp[i] = src[i];
          temp[i] = cloneObiect(src[i]);
        }
        result = temp;
        break;
    }
    return result;
  }