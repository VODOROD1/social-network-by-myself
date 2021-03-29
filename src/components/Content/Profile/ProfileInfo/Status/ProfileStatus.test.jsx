import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('test profile-status', () => {
    test('local-state is correct', () => {
        const comp = create(<ProfileStatus status={'test status'} />)
        const instance = comp.root
        debugger;
        expect(instance.props.status).toBe('test status')
    })
    test('text child of span', () => {
        const comp = create(<ProfileStatus status={'test status'} />)
        const instance = comp.root
        const span = instance.findByType('span')
        debugger;
        expect(span.children[0]).toBe('test status')
    })
    test('initially must be SPAN',() => {
        const comp = create(<ProfileStatus />)
        const instance = comp.root
        const span = instance.findByType('span')
        expect(span).not.toBeNull()
    })
    test('initially must not be INPUT',() => {
        const comp = create(<ProfileStatus />)
        const instance = comp.root
        expect(() => {
            const input = instance.findByType('input')
        }).toThrow()
    })
    test('onDoubleClick on span expect to be input',() => {
        const comp = create(<ProfileStatus />)
        const instance = comp.root
        const span = instance.findByType('span')
        span.props.onDoubleClick()
        const input = instance.findByType('input')
        expect(input).not.toBeNull()
    })
})

