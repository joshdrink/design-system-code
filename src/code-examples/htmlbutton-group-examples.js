import React from 'react';
import { ButtonToolbar, ButtonDropdown, Button, ButtonGroup,
  DropdownToggle, DropdownMenu, DropdownItem,
  Container, Row, Col } from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';

// basic
class ButtonGroupExample1 extends React.Component
{
    render() {
      return (
        <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
          <Row>
            <Col lg="12" md="12" xs="12">
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" xs="12">
              <HtmlCodeBlock html={`
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
              `}
              />
            </Col>
          </Row>
        </Container>
  );}
}

// button toolbar
class ButtonGroupExample2 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  };
};

// button toolbar 2
class ButtonGroupExample3 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">1</button>
                <button type="button" className="btn btn-secondary">2</button>
                <button type="button" className="btn btn-secondary">3</button>
                <button type="button" className="btn btn-secondary">4</button>
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="btnGroupAddon">@</span>
                <input type="text" className="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon" />
              </div>
            </div>

            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">1</button>
                <button type="button" className="btn btn-secondary">2</button>
                <button type="button" className="btn btn-secondary">3</button>
                <button type="button" className="btn btn-secondary">4</button>
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="btnGroupAddon2">@</span>
                <input type="text" className="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon2" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">1</button>
                <button type="button" className="btn btn-secondary">2</button>
                <button type="button" className="btn btn-secondary">3</button>
                <button type="button" className="btn btn-secondary">4</button>
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="btnGroupAddon">@</span>
                <input type="text" className="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon" />
              </div>
            </div>

            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">1</button>
                <button type="button" className="btn btn-secondary">2</button>
                <button type="button" className="btn btn-secondary">3</button>
                <button type="button" className="btn btn-secondary">4</button>
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="btnGroupAddon2">@</span>
                <input type="text" className="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon2" />
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Sizing
class ButtonGroupExample4 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ButtonGroup size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup  size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <ButtonGroup size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup  size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// nesting
class ButtonGroupExample5 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown isOpen='false' toggle='false'>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// vertical
class ButtonGroupExample6 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
          <ButtonGroup vertical>
            <Button>1</Button>
            <Button>2</Button>
            <ButtonDropdown isOpen='false' toggle='false'>
              <DropdownToggle caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <ButtonGroup vertical>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default { ButtonGroupExample1, ButtonGroupExample2, ButtonGroupExample3, ButtonGroupExample4, ButtonGroupExample5, ButtonGroupExample6 };