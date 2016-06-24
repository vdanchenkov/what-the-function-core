import suggestionToString from './../suggestionToString'

export default results => results.map(suggestionToString).join('\n') + '\n'
