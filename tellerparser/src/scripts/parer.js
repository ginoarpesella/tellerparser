//

export function parserTxt(txt) {}

function cleanTxt(txt) {
  let lines = getCommands(txt);
  let eventLines = getEventLines(lines);
  let eventLines = eventLines.reverse(); // we reserse here so
  let sets = createSets(eventLines);
}

// gets only the lines we want to work with and their line number
function getEventLines(lines) {
  let cleanLines = [];
  cmds.map((cmd, i) => {
    if (cmd.trim().endsWith(";OPEN")) {
      cleanLines.push({ cmd: cmd, lineNumber: i });
      return;
    }

    if (cmd.trim().endsWith(";CLOSED")) {
      cleanLines.push({ cmd: cmd, lineNumber: i });
      return;
    }

    if (cmd.includes(";COUNT;")) {
      cleanLines.push({ cmd: cmd, lineNumber: i });
    }
  });
  return cleanLines;
}

// creates sets of events between each opened event
function createSets(eventLines) {
  let sets = [];
  while (eventLines.length > 0) {
    let set = [];
    for (let i = 0; i < eventLines.length; i++) {
      if (eventLines[i].cmd.trim().endsWith(";OPEN")) {
        set.push(eventLines[i]);
        return;
      }

      if (eventLines[i].cmd.trim().endsWith(";CLOSED")) {
        set.push(eventLines[i]);
        break;
      }

      if (eventLines[i].cmd.includes(";COUNT;")) {
        set.push(eventLines[i]);
        return;
      }
    }
    sets.push(set);
    //this will remove the lines we have just placed in our set
    eventLines = eventLines.slice(set.length, eventLines.length);
  }

  return eventLines;
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
  return lineSplit[3];
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

  return total;
}
