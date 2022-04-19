"use strict";
/*eslint-disable*/
let json = {
    "glossary": {
        "title": "example glossary",
        "GlossSeeAlso": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossSeeAlso": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML", "S"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
};
let simpleObject = {a:1, b:2,c:{a:[1,2]},d:{e:3}}

function allLeafNodes(json) {
    if (json == null)
        return;
    let leaves = [];
    for (let key in json) {
        if (Array.isArray(json[key]) || typeof json[key] != 'object') {
            let leaf = {};
            leaf[key] = json[key];
            // console.log(leaf)
            leaves.push(leaf);
        }
        else
            leaves = leaves.concat(allLeafNodes(json[key]))
    }
    return leaves;
}
// console.log(allLeafNodes(json));
function countKeys(json) {
    if (Array.isArray(json) || typeof json != 'object')
        return 1;
    let count = 1;
    for (let key in json) {
        count += countKeys(json[key])
    }
    return count;
}
// console.log(countKeys(simpleObject));

//

function findAllKeysWithGivenValue(json, givenValue) {
    if (json == null)
        return;
    let matches = [];
    for (let key in json) {
        let value = json[key];
        if (Array.isArray(value)) {
            let match = value.filter((eachItem) => eachItem == givenValue);
            if (match.length > 0)
                matches.push(key);
        }
        else if (typeof value === 'object') {
            // console.log(key,json[key]);
            let previousValue = findAllKeysWithGivenValue(value, givenValue)
            matches = matches.concat(previousValue);
        } else if (value == givenValue) {
            matches.push(key);
            // console.log(" here keys and values ***********",key,value)
        }
    }
    return matches;
}
//

 console.log(findAllKeysWithGivenValue(simpleObject,1))
function findAllMatchingKeys(json, givenKey) {
    if (Array.isArray(json) || typeof json != 'object')
        return [];
    let matchingKeys = [];
    for (let key in json) {
        let value = json[key];
        if (key == givenKey)
            matchingKeys.push(value);
        matchingKeys = matchingKeys.concat(findAllMatchingKeys(value, givenKey));
    }
    return matchingKeys;
}
console.log(findAllMatchingKeys(simpleObject,"a"))
// console.log(Array.isArray({h:1,a:[]}))//false
// console.log(typeof [])//false