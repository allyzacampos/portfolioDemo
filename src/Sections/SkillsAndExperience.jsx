import React from 'react'
import { TextCol } from '../Components/Reusable Styles/textCol'
import { H1 } from '../Components/Reusable Styles/H1'
import { Paragraph } from '../Components/Reusable Styles/Paragraph'
import { ParagraphBold } from '../Components/Reusable Styles/ParagraphBold'
import { ToolsCard } from '../Components/ToolsCard'
import { Section } from "../Components/Reusable Styles/Section";
import { TimelineExp } from '../Components/TimelineExp'

export const SkillsAndExperience = () => {
  return (
    <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
            <TextCol>
                <H1>Skills & Experience</H1>
                <Paragraph>I'm your creative Swiss Army knife, skilled in graphic design, web wizardry, and WordPress magic. I've crafted logos, built beautiful websites, and sprinkled SEO fairy dust to boost online visibility. Let's make your project sparkle!</Paragraph>
                <ParagraphBold>Experience</ParagraphBold>
                <TimelineExp />
            </TextCol>

            <div className="md:p-10 p-5 space-y-[30px]">
                <ParagraphBold>Design Tools</ParagraphBold>
                <ToolsCard />
            </div>
        </div>
    </Section>
  )
}
