module.exports = Phrase;

// Adds reverse to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Adds blank method to all strings.
String.prototype.blank = function() {
	return this.length === 0 || /^\s*$/.test(this);
}

// Adds a last element method to all strings.
String.prototype.last = function() {
	return this.slice(this.length-1);
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
		// return this.content
	}

	// Returns the letters in the content.
	this.letters = function letters() {
		return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
	}

	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}