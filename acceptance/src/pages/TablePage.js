import React, {useState} from "react";
import Dropdown from "@hig/dropdown";
import Input from "@hig/input";
import Label from "@hig/label";
import Toggle from "@hig/toggle";
import Surface from "@hig/surface";
import RadioButton from "@hig/radio-button";
import { ThemeContext } from "@hig/theme-context";
// import Table from "table-test/build/index";
import Table from "@hig/table";
import lightGrayMediumDensityTheme from '@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json';
import lightGrayHighDensityTheme from '@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json';
import darkBlueMediumDensityTheme from '@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json';
import darkBlueHighDensityTheme from '@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json';
import darkGrayMediumDensityTheme from '@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json';
import darkGrayHighDensityTheme from '@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json';


import { TABLE_OBJECT_CUSTOM } from "../fixtures/TableObjectCustom";
import { TABLE_OBJECT_BASIC } from "../fixtures/TableObjectBasic";

import "@hig/fonts/build/ArtifaktElement.css";
import "../TablePage.css";

const TablePage = () => {
	const [theme, setTheme] = useState(0);
	const themes = [
		lightGrayMediumDensityTheme,
		lightGrayHighDensityTheme,
		darkBlueMediumDensityTheme,
		darkBlueHighDensityTheme,
		darkGrayMediumDensityTheme,
		darkGrayHighDensityTheme
	];
	const headerRowSpreadProps = {
		// onClick: () => console.log('header row click')
	};
	const rowSpreadProps = {
		"data-test": 1,
		"data-blah": 2,
		// onClick: () => console.log('row click'),
	};
	const tableSpreadProps = {
		"aria-label": "table",
		"role": "table",
		tabIndex: 1,
		// onClick: () => console.log('table click'),
	};
	const [paginateDynamic, setPaginateDynamic] = useState(false);
	const [columnSelection, setColumnSelection] = useState(false);
	const [rowSelection, setRowSelection] = useState(true);
	const [customComponents, setCustomComponents] = useState(TABLE_OBJECT_CUSTOM);
	const [alternateBg, setAlternateBg] = useState(false);
	const [headerBackgroundSelection, setHeaderBackgroundSelection] = useState('surface-levels');
	const [headerBackgroundColor, setHeaderBackgroundColor] = useState(null)
	const [isDescending, setIsDescending] = useState(true)

	const [checkboxToggle, setCheckboxToggle] = useState(Array(TABLE_OBJECT_CUSTOM.data.length).fill(false));
	const handleCheckboxToggle = (count, value) => {
		const copyCheckboxArray = checkboxToggle.map((item, index) => {
			if (index === count) {
				item = value;
			}
			return item;
		});

		setCheckboxToggle(copyCheckboxArray);
	}

	return (
		<ThemeContext.Provider value={themes[theme]}>
			<Surface
				level={200}
				stylesheet={(styles, props, themeData) => {
					return {
						...styles,
						surface: {
							...styles.surface,
							width: `90%`
						}
					}
				}}
			>
				<div className="wrapper">
					<div
						className="left-nav"
						style={{
							background: themes[theme]?.resolvedRoles['colorScheme.surface.level200'],
							borderRight: `1px solid ${themes[theme]?.resolvedRoles['colorScheme.surface.level300']}`
						}}
					>
						<div
							className="settings-wrapper"	
						>
							<div className="dropdowns-wrapper">
								<Label variant="top">Theme</Label>
								<Dropdown
									defaultValue='light-gray-medium'
									onChange={(value) => {
										switch(value) {
											case 'light-gray-high':
												setTheme(1);
												break;
											case 'dark-blue-medium':
												setTheme(2);
												break;
											case 'dark-blue-high':
												setTheme(3);
												break;
											case 'dark-gray-medium':
												setTheme(4);
												break;
											case 'dark-gray-high':
												setTheme(5);
												break;
											default:
												setTheme(0);
										}
									}}
									options={[
										'light-gray-medium',
										'light-gray-high',
										'dark-blue-medium',
										'dark-blue-high',
										'dark-gray-medium',
										'dark-gray-high'
									]}
								/>
								<Label variant="top">Table Type</Label>
								<Dropdown
									defaultValue='basic table'
									onChange={(value) => {
										switch(value) {
											case 'custom components':
												setCustomComponents({...TABLE_OBJECT_CUSTOM});
												break;
											case 'basic table':
											default:
												setCustomComponents({...TABLE_OBJECT_BASIC});
												break;
										}
									}}
									options={[
										'basic table',
										'custom components',
									]}
								/>
								<Label variant="top">Header Background Color</Label>
							</div>
							<div className="radios-wrapper">
								<div className="radio-wrapper">
									<RadioButton
										checked={headerBackgroundSelection === 'surface-levels'}
										name="header-color"
										onChange={(event) => {
											setHeaderBackgroundSelection(event.currentTarget.value);
										}}
										value="surface-levels"
									/>
									<Label>Surface Levels</Label>
								</div>
								<Dropdown
									defaultValue="level 100"
									disabled={headerBackgroundSelection === 'custom'}
									onChange={(value) => {
										switch(value) {
											case 'level 200':
												setHeaderBackgroundColor(themes[theme]?.resolvedRoles['colorScheme.surface.level200']);
												// themes[theme]?.resolvedRoles['colorScheme.surface.level200']
												break;
											case 'level 250':
												setHeaderBackgroundColor(themes[theme]?.resolvedRoles['colorScheme.surface.level250']);
												break;
											case 'level 300':
												setHeaderBackgroundColor(themes[theme]?.resolvedRoles['colorScheme.surface.level300']);
												break;
											case 'level 350':
												setHeaderBackgroundColor(themes[theme]?.resolvedRoles['colorScheme.surface.level350']);
												break;
											default:
												setHeaderBackgroundColor(themes[theme]?.resolvedRoles['colorScheme.surface.level100']);
										}
									}}
									options={[
										'level 100',
										'level 200',
										'level 250',
										'level 300',
										'level 350',
									]}
								/>
								<div className="radio-wrapper">
									<RadioButton
										checked={headerBackgroundSelection === 'custom'}
										name="header-color"
										onChange={(event) => {
											setHeaderBackgroundSelection(event.currentTarget.value);
										}}
										value="custom"
									/>
									<Label>Custom</Label>
								</div>
								<Input
									disabled={headerBackgroundSelection === 'surface-levels'}
									onChange={(event) => {
										setHeaderBackgroundColor(event.currentTarget.value);
									}}
									placeholder="Custom color (hex, rgb, rgba)"
								/>
							</div>
							<div className="toggles-wrapper">
								<Label variant="top">Column Selection</Label>
								<div className="toggle-wrapper">
									<Label>Off</Label>
									<Toggle onChange={() => setColumnSelection(!columnSelection)} />
									<Label>On</Label>
								</div>
								<Label variant="top">Row Selection</Label>
								<div className="toggle-wrapper">
									<Label>Off</Label>
									<Toggle onChange={() => setRowSelection(!rowSelection)} defaultOn={rowSelection} />
									<Label>On</Label>
								</div>
								<Label variant="top">Pagination</Label>
								<div className="toggle-wrapper">
									<Label>Off</Label>
									<Toggle onChange={() => setPaginateDynamic(!paginateDynamic)} defaultOn={!paginateDynamic} />
									<Label>On</Label>
								</div>
								<Label variant="top">Alternate Background</Label>
								<div className="toggle-wrapper">
									<Label>Off</Label>
									<Toggle onChange={() => setAlternateBg(!alternateBg)} defaultOn={alternateBg} />
									<Label>On</Label>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div>
							<Table
								alternateBg={alternateBg}
								columnSelection={columnSelection}
								frozenHeader={true}
								frozenHeaderCount={paginateDynamic ? 15 : 10}
								headerBackgroundColor={headerBackgroundColor}
								headerRowSpreadProps={headerRowSpreadProps}
								rowSpreadProps={rowSpreadProps}
								rowSelection={rowSelection}
								tableObject={customComponents}
								tableSpreadProps={tableSpreadProps}
								paginateDynamic={paginateDynamic}
								onSortClick={(e, props, headerIndex) => {
									setIsDescending(!isDescending)
									const categoryToSort = customComponents.columns[headerIndex].accessor;
									const sortedArray = customComponents.data.map(column => {
										const copyColumn = [...column]

										let seeColumn = copyColumn.sort((a, b) => (a[categoryToSort] < b[categoryToSort]) ? 1 : -1);
										if (isDescending) {
											seeColumn = copyColumn.sort((a, b) => (a[categoryToSort] > b[categoryToSort]) ? 1 : -1);
										}
								    return seeColumn;
									})
									
									customComponents.data = sortedArray;
								}}
								tableGroupSelectAll={{checkboxToggle, setCheckboxToggle: handleCheckboxToggle}}
								stylesheet={(styles, props, themeData) => {
									return {
										...styles,
										higTableHeaderWrapper: {
											...styles.higTableHeaderWrapper,
											borderBottom: '2px solid #fff'
										},
										higTableCell: {
											...styles.higTableCell,
											borderTopColor: 'none',
											borderBottomColor: 'none'
										}
									}
								}}
							/>
						</div>
					</div>
				</div>
			</Surface>
		</ThemeContext.Provider>		
	);
}

export default TablePage;
