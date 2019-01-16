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
	// a = this.split(" ");
	// return a[a.length-1];

	
	// return this[this.length-1];
	return this.slice(this.length-1);
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	// Checks if content is blank.
	this.verifyContent = function verifyContent() {
		return this.content.blank();
	}

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.content.toLowerCase();
	}

	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}