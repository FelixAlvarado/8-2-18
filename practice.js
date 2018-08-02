// determines if two strings have a common substring

function twoStrings(s1, s2) {
    let counter = {};
        for (let i = 0; i < s1.length; i++){
            counter[s1[i]] = true;
        }
        for (let j = 0; j < s2.length; j++){
            if(counter[s2[j]]){return "YES";}
        }
        return "NO";
    
    }