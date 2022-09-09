// 5. Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let longest = '';

function palindrome (l, r) {

    while (l>=0 && r<s.length && s[l]===s[r]) {
        if (r-l+1 > longest.length) {
            longest = s.slice(l, r+1)
        }
        l--
        r++
    }
}

for (let i=0; i<s.length; i++) {
    palindrome(i,i);
    palindrome(i, i+1);
}

return longest;

};

longestPalindrome("abcba")