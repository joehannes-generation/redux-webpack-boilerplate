import React, { Component, PropTypes } from 'react'
import { Navbar, Nav, NavBrand, NavItem, CollapsibleNav, Well, Grid, Row, Col, Panel, Button, ButtonGroup } from 'react-bootstrap'
import Label from 'elements/forms/controls/Label'
import classNames from 'classnames'
import Identity from 'controls/Identity'

import DevMicro from 'elements/micro/DevMicro'
import HotMicro from 'elements/micro/HotMicro'

import FA from 'elements/visual/FA'

import contextTypes from 'app/context'
import './FooterBar.css'

const inlineStyle = { display: 'inline-block' }

const AttributesBar = props => (
  <div style={inlineStyle}>
    {__DEV__ ? <DevMicro /> : null}
    {__HOT__ ? <HotMicro /> : null}
  </div>
)


export default class FooterBar extends Component {
  static propTypes =  { showCopyright: PropTypes.bool.isRequired
                      , showLegal: PropTypes.bool.isRequired
                      , showAttributes: PropTypes.bool.isRequired
                      , errors: PropTypes.array
                      };
  static defaultProps = { showCopyright: true
                        , showLegal: true
                        , showAttributes: !__PROD__
                        };
  static contextTypes = contextTypes;
  render() {
    const { showAttributes, showLegal, showCopyright } = this.props

    return (
      <div id="FooterBar">
        <Row>
          <Col className="FooterBarLeft" xs={6}>
            {showAttributes ? <AttributesBar /> : null}
          </Col>
          <Col className="FooterBarRight" xs={6}>
          </Col>
        </Row>
        <Row>
          <Col className="FooterBarLeft" xs={6}>
            <Identity />
          </Col>
          <Col className="FooterBarRight" xs={6}>
          </Col>
        </Row>
      </div>
    )
  }
}
