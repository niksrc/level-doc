'use strict';
const sublevel = require('level-sublevel');
const uuid = require('uuid/v1');
const bytewise = require('bytewise');

module.exports = Store;

const encoding = {
	valueEncoding: 'json',
	keyEncoding: bytewise
};

function Store(level, collection) {
	this._db = level;
	this._sublevel = sublevel(level);
	this._collection = this._sublevel(collection);
}

Store.prototype.get = function (id, cb) {
	this._collection.get(id, encoding, cb);
};

Store.prototype.put = function (doc, cb) {
	const id = uuid();
	this._collection.put(id, Object.assign({}, doc, {id: id}), encoding, cb);
};

Store.prototype.del = function (id, cb) {
	this._collection.del(id, cb);
};

Store.prototype.createReadStream = function (opts) {
	return this._collection.createReadStream(opts);
};

Store.prototype.createKeyStream = function () {
	return this._collection.createKeyStream();
};

Store.prototype.createValueStream = function () {
	return this._collection.createValueStream();
};
