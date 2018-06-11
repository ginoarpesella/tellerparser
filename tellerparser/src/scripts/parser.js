// everthings_equal is a function that takes an array
const everythings_equal = array => array.every(a => a === array[0]);
export const onlyUnique = (value, index, self) => self.indexOf(value) === index;

class Set {
  constructor(cmd, lNo) {
    this.cmd = cmd;
    this.lineNumber = lNo;
  }
}

export function parserTxt(txt) {
  let lines = getCommands(txt);
  let eventLines = getEventLines(lines);
  if (eventLines === undefined) {
    return;
  }
  eventLines.reverse(); // we reserse here so to caputer close as a set
  let sets = createSets(eventLines);
  return sets;
}

// splits all the commands by new line
export function getCommands(txt) {
  const txtSplit = txt.split(/\n/);
  let cmds = [];
  txtSplit.forEach(element => {
    if (element.length > 1) {
      cmds.push(element);
    }
  });
  return cmds;
}

// extracts the drawer id from a string
export function getDrawerId(txt) {
  let lineSplit = txt.split(";");
  if (lineSplit.length === 0) {
    return;
  }
  return lineSplit[0].split(" ").slice(-1)[0];
}

// extracts the date time from a string
export function getDateTime(txt) {
  let lineSplit = txt.split(";");
  if (lineSplit.length === 0) {
    return;
  }
  return new Date(lineSplit[1]);
}

// extracts the sequence number out of a string
export function getSequenceNumber(txt) {
  let lineSplit = txt.split(";");
  if (lineSplit.length === 0) {
    return;
  }
  if (isNaN(lineSplit[3])) {
    return lineSplit[3];
  } else {
    return parseInt(lineSplit[3]).toString();
  }
}

// extracts the the count rows from a string
export function getCounts(txt) {
  let lineSplit = txt.split(";");
  if (lineSplit.length === 0) {
    return;
  }

  let counts = [];
  for (let i = 4; i < lineSplit.length; i++) {
    if (lineSplit[i] !== "") {
      counts.push(lineSplit[i]);
    }
  }
  return counts;
}

export function getDrawerTotal(txt) {
  let counts = getCounts(txt);
  if (counts === undefined) {
    return;
  }
  let values = counts.map((v, i) => {
    let row = v.split(",");
    return row[4];
  });
  let total = values.reduce((p, c, i) => {
    return isNaN(c) ? parseFloat(p) + 0.0 : parseFloat(p) + parseFloat(c);
  });

  return total.toFixed(2);
}

export function isOpen(line) {
  return line.trim().includes(";OPEN") ? true : false;
}

export function isClose(line) {
  return line.trim().includes(";CLOSED") ? true : false;
}

export function isCount(line) {
  return line.includes(";COUNT;") ? true : false;
}

export function validate_drawerIds(lines) {
  return everythings_equal(lines) ? true : false;
}

// gets only the lines we want to work with and their line number
function getEventLines(lines) {
  let cleanLines = [];

  for (let i = 0; i < lines.length; i++) {
    if (isOpen(lines[i])) {
      cleanLines.push(new Set(cleanOpen(lines[i]), i));
    }

    if (isClose(lines[i])) {
      cleanLines.push(new Set(cleanClose(lines[i]), i));
    }

    if (isCount(lines[i])) {
      cleanLines.push(new Set(cleanCount(lines[i]), i));
    }
  }

  return cleanLines;
}

// creates sets of events between each opened event
function createSets(eventLines) {
  let sets = [];
  while (eventLines.length > 0) {
    let set = [];
    let foundOpen = false;
    let foundClose = false;
    let foundCount = false;

    for (let i = 0; i < eventLines.length; i++) {
      if (isOpen(eventLines[i].cmd)) {
        if (foundOpen) {
          break;
        }
        set.push(eventLines[i]);
        foundOpen = true;
        break;
      }

      if (isClose(eventLines[i].cmd)) {
        if (foundClose) {
          break;
        }
        set.push(eventLines[i]);
        foundClose = true;
        continue;
      }

      if (isCount(eventLines[i].cmd)) {
        if (foundCount) {
          break;
        }
        set.push(eventLines[i]);
        foundCount = true;
        continue;
      }
    }
    sets.push(set);
    //this will remove the lines we have just placed in our set
    eventLines = eventLines.slice(set.length, eventLines.length);
  }

  return sets;
}

const trimEnd = (line, anchor) => {
  return line.substring(0, line.indexOf(anchor) + anchor.length);
};

// this can only
const trimStart = line => {
  let lineSplit = line.split(";").reverse();
  if (lineSplit[2].length !== 21) {
    lineSplit[2] = cleanId(lineSplit[2]);
  }

  return lineSplit
    .slice(0, 3)
    .reverse()
    .join(";");
};

const cleanId = line => {
  return line.substring(line.length - 21, line.length);
};

//82600-001-180130-0000;2018-02-26T12:53:31;OPEN
function cleanOpen(line) {
  let cleanLine = trimEnd(line, ";OPEN");
  return trimStart(cleanLine);
}

//82600-001-180130-0000;2018-02-26T13:11:35;CLOSED
function cleanClose(line) {
  let cleanLine = trimEnd(line, ";CLOSED");
  return trimStart(cleanLine);
}

function cleanCount(line) {}

function cleanCount(line) {
  let anchor = ";COUNT";
  let index = line.indexOf(anchor);
  let subLine = line.substring(0, index + anchor.length);
  return trimStart(subLine) + line.substring(index + anchor.length);
}
