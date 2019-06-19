import React, { Component } from 'react'

import {
  Widget,
  WidgetHeader,
  WidgetBody,
} from '@mozaik/ui'

import { ResponsivePie } from '@nivo/pie'


import PropTypes from 'prop-types'

/**
 * Displays a pie chart of contributions by team members.
 *
 * Requires a configuration option, project.  Project is the
 * name of the git repository to show information for.
 */
export default class ContributionsPieChart extends Component {

  static propTypes = {
    apiData: PropTypes.object,
    theme:   PropTypes.object.isRequired
  };


  render() {
    const {
            apiData,
            theme,
          } = this.props;

    let body = null;

    const MyResponsivePie = ({data}) => (

      <ResponsivePie
        colors = {theme.charts.colors}
        data = {data}
        margin = {{
          "top":    40,
          "right":  80,
          "bottom": 80,
          "left":   80
        }}
        sliceLabel = {function (e) {
          return e.value + "%";
        }}
        startAngle = {-86}
        colorBy = "id"
        borderWidth = {2}
        borderColor = "inherit:darker(0.4)"
        enableRadialLabels = {true}
        radialLabelsSkipAngle = {0}
        radialLabelsTextXOffset = {6}
        radialLabelsTextColor = "#FFF"
        radialLabelsLinkOffset = {0}
        radialLabelsLinkDiagonalLength = {16}
        radialLabelsLinkHorizontalLength = {24}
        radialLabelsLinkStrokeWidth = {1}
        radialLabelsLinkColor = "inherit"

        animate = {true}
        motionStiffness = {90}
        motionDamping = {15}
      />
    );

    let numbers = [10, 20, 30, 40];

    let data = numbers.map((number) => {
      return {
        "id":    `${number}`,
        "label": `name${number}`,
        "value": number,
        "color": "rgba(255,255,255,1)"
      };
    });


    body = (
      MyResponsivePie({data: data})
    );

    let title = `Chart Test`;

    return (
      <Widget>
        <WidgetHeader title = {title}/>
        <WidgetBody>
          {body}
        </WidgetBody>
      </Widget>
    )
  }
}
