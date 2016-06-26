'use strict'

export default class Game{
	constructor(){
		this.model = [null,null,null,null,null,null,null,null,null]
		this.status = null

		this.indexPriority = [4,0,2,6,8,1,3,5,7]
		this.lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
	}

	getModel(){
		return {
			model: this.model,
			status: this.status,
		}
	}
	reset(){
		this.model = [null,null,null,null,null,null,null,null,null]
		this.status = null
	}

	makeTurn(index){
		if(!this.model[index]){
			this.model[index] = 'X'
			if(this._checkStatus(this.model)==='X') return this.status = 'You Win'
			if(!this._otherTurn(this.model)) return this.status = 'Draw'
			if(this._checkStatus(this.model)==='O') return this.status = 'You Lose'
		} 
	}

	_otherTurn(model){
		let next = this._criticalLineIndex(model, 'O')
		if(!(next === null)) return model[next] = 'O'
		next = this._criticalLineIndex(model, 'X')
		if(!(next === null)) return model[next] = 'O'
		next = this._getNextBlankIndex(model)
		if(!(next === null)) return model[next] = 'O'
		return false
	}
	_criticalLineIndex(model, sign){
		let criticalIndex = null
		this.lines.forEach(line=>{
			let signed = 0
			let blank = 0
			let blankIndex = null
			line.forEach(index=>{
				if(model[index] === sign) signed++
				if(!model[index]) {
					blank++; blankIndex = index
				}
			})
			if(signed === 2 && blank == 1) criticalIndex = blankIndex
		})
		return criticalIndex
	}
	_getNextBlankIndex(model){
		for(let index of this.indexPriority){
			if(!model[index]){
				return index
			}
		}
		return null
	}

	_checkStatus(model){
		let win = null;
		['X', 'O'].forEach(sign=>{
			this.lines.forEach(line=>{
				let signed = 0
				line.forEach(index=>{
					if(model[index] === sign) signed++
				})
				if(signed === 3) win = sign
			})
		})
		return win
	}
}
