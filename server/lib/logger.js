const format = require('./format')
const levels = ['debug', 'info', 'warn', 'error']

const LEVELS_MAP_MESSAGE = {
    debug: {
        type: 'DEBUG',
    },
    info: {
        type: 'INFO',
    },
    error: {
        type: 'ERROR',
    },
    warn: {
        type: 'WARNING',
    }
}

const logger = {}

const log = (level, ...msgList) => {
    const message = msgList.length ? msgList.map(format).join(' ') : ''
    // eslint-disable-next-line
    console[level](`<${LEVELS_MAP_MESSAGE[level].type}>   message: ${message}`)
}

levels.forEach((level) => {
    logger[level] = log.bind(null, level)
})

module.exports = logger

