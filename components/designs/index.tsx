import Design1 from './Design1'
import Design2 from './Design2'
import Design3 from './Design3'
import Design4 from './Design4'
import Design5 from './Design5'
import Design6 from './Design6'
import Design7 from './Design7'
import Design8 from './Design8'
import Design9 from './Design9'
import Design10 from './Design10'
import Design11 from './Design11'
import Design12 from './Design12'
import Design13 from './Design13'
import Design14 from './Design14'
import Design15 from './Design15'
import Design16 from './Design16'
import Design17 from './Design17'
import Design18 from './Design18'
import Design19 from './Design19'
import Design20 from './Design20'
import Design21 from './Design21'
import Design22 from './Design22'
import Design23 from './Design23'
import Design24 from './Design24'
import Design25 from './Design25'
import Design26 from './Design26'
import Design27 from './Design27'
import Design28 from './Design28'
import Design29 from './Design29'
import Design30 from './Design30'
import Design31 from './Design31'
import Design32 from './Design32'
import Design33 from './Design33'
import Design34 from './Design34'
import Design35 from './Design35'
import Design36 from './Design36'
import Design37 from './Design37'
import Design38 from './Design38'
import Design39 from './Design39'
import Design40 from './Design40'
import Design41 from './Design41'
import Design42 from './Design42'
import Design43 from './Design43'
import Design44 from './Design44'
import Design45 from './Design45'
import Design46 from './Design46'
import Design47 from './Design47'
import Design48 from './Design48'
import Design49 from './Design49'
import Design50 from './Design50'

export const designs = [
  Design1,
  Design2,
  Design3,
  Design4,
  Design5,
  Design6,
  Design7,
  Design8,
  Design9,
  Design10,
  Design11,
  Design12,
  Design13,
  Design14,
  Design15,
  Design16,
  Design17,
  Design18,
  Design19,
  Design20,
  Design21,
  Design22,
  Design23,
  Design24,
  Design25,
  Design26,
  Design27,
  Design28,
  Design29,
  Design30,
  Design31,
  Design32,
  Design33,
  Design34,
  Design35,
  Design36,
  Design37,
  Design38,
  Design39,
  Design40,
  Design41,
  Design42,
  Design43,
  Design44,
  Design45,
  Design46,
  Design47,
  Design48,
  Design49,
  Design50,
]

export function getDesign(id: number) {
  return designs[id - 1] || Design1
}