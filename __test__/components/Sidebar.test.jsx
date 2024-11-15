import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Sidebar from '../../components/Sidebar';

describe('When looking at the Sidebar', () => {
  beforeEach(() => {
    render(
      <MemoryRouterProvider>
        <Sidebar />
      </MemoryRouterProvider>
    );
  });
  describe('When looking at sections in the sidebar', () => {
    describe('When looking at the Contact Us section', () => {
      it('should render the Contact Us heading', () => {
        expect(
          screen.getByRole('heading', { level: 3, name: 'Contact Us' })
        ).toBeInTheDocument();
      });

      describe('When looking at the Phone section', () => {
        it('should render the Phone heading', () => {
          expect(
            screen.getByRole('heading', { level: 4, name: 'Phone' })
          ).toBeInTheDocument();
        });

        it('should render the Phone number as a link', () => {
          expect(
            screen.getByRole('link', { name: '407.246.2314' })
          ).toBeInTheDocument();
        });

        it('should render the Phone number as a link with the correct href', () => {
          expect(
            screen.getByRole('link', { name: '407.246.2314' })
          ).toHaveAttribute('href', 'tel:+14072462314');
        });
      });

      describe('When looking at the Email section', () => {
        it('should render the Email heading', () => {
          expect(
            screen.getByRole('heading', { level: 4, name: 'Email' })
          ).toBeInTheDocument();
        });

        it('should render the Email address', () => {
          expect(
            screen.getByRole('link', { name: 'swcustomersvc@orlando.gov' })
          ).toBeInTheDocument();
        });

        it('should render the Email address as a link with the correct href', () => {
          expect(
            screen.getByRole('link', { name: 'swcustomersvc@orlando.gov' })
          ).toHaveAttribute('href', 'mailto: swcustomersvc@orlando.gov');
        });
      });

      describe('When looking at the Main Office section', () => {
        it('should render the Main Office heading', () => {
          expect(
            screen.getByRole('heading', { level: 4, name: 'Main Office' })
          ).toBeInTheDocument();
        });

        it('should render the Main Office address', () => {
          expect(screen.getByText(/Solid Waste Division/i)).toBeInTheDocument();
          expect(screen.getByText(/1028 Woods Ave/i)).toBeInTheDocument();
          expect(screen.getByText(/Orlando, FL/i)).toBeInTheDocument();
          expect(screen.getByText(/32805/i)).toBeInTheDocument();
        });

        it('should render the View Map link', () => {
          expect(
            screen.getByRole('link', { name: 'View Map' })
          ).toBeInTheDocument();
        });

        it('should render the View Map link with the correct href', () => {
          expect(
            screen.getByRole('link', { name: 'View Map' })
          ).toHaveAttribute(
            'href',
            'https://www.google.com/maps/place/Orlando+Solid+Waste+Management/@28.5293377,-81.3983072,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77ba4da0da7bb:0x4b8c9d68e58488b1!8m2!3d28.5293377!4d-81.3957323!16s%2Fg%2F1thr7_cg?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D'
          );
        });

        it('should render the View Map link with the correct target', () => {
          expect(
            screen.getByRole('link', { name: 'View Map' })
          ).toHaveAttribute('target', '_blank');
        });
      });
    });

    describe('When looking at the Grease Program section', () => {
      it('should render the Grease Program heading', () => {
        expect(
          screen.getByRole('heading', { level: 3, name: 'Grease Program' })
        ).toBeInTheDocument();
      });

      it('should render the Grease Program description', () => {
        expect(
          screen.getByText(
            /For questions on recycling cooking oil or our grease program, please contact:/i
          )
        ).toBeInTheDocument();
      });

      it('should render the Grease Program contact name', () => {
        expect(screen.getByText(/Michelle Lopez/i)).toBeInTheDocument();
      });

      it('should render the Grease Program contact title', () => {
        expect(
          screen.getByText(/Public Awareness Specialist/i)
        ).toBeInTheDocument();
      });

      it('should render the Grease Program contact email', () => {
        expect(
          screen.getByRole('link', { name: 'michelle.lopez@orlando.gov' })
        ).toBeInTheDocument();
      });

      it('should render the Grease Program contact email with the correct href', () => {
        expect(
          screen.getByRole('link', { name: 'michelle.lopez@orlando.gov' })
        ).toHaveAttribute('href', 'mailto: michelle.lopez@orlando.gov');
      });

      it('should render the Grease Program contact phone number', () => {
        expect(
          screen.getByRole('link', { name: '407.246.2661' })
        ).toBeInTheDocument();
      });
    });

    describe('When looking at the Useful Links section', () => {
      it('should render the Useful Links heading', () => {
        expect(
          screen.getByRole('heading', { level: 3, name: 'Useful Links' })
        ).toBeInTheDocument();
      });

      describe('When looking at the links in the Useful Links section', () => {
        describe('When looking at the Florida Department of Environmental Protection link', () => {
          it('should render the Florida Department of Environmental Protection link', () => {
            expect(
              screen.getByRole('link', {
                name: 'Flordia Department of Environmental Protection',
              })
            ).toBeInTheDocument();
          });

          it('should render the Florida Department of Environmental Protection link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'Flordia Department of Environmental Protection',
              })
            ).toHaveAttribute(
              'href',
              'https://floridadep.gov/waste/waste-reduction/content/recycling'
            );
          });
        });

        describe('When looking at the American Forest and Paper link', () => {
          it('should render the American Forest and Paper link', () => {
            expect(
              screen.getByRole('link', { name: 'American Forest and Paper' })
            ).toBeInTheDocument();
          });

          it('should render the American Forest and Paper link with the correct href', () => {
            expect(
              screen.getByRole('link', { name: 'American Forest and Paper' })
            ).toHaveAttribute('href', 'https://www.afandpa.org/');
          });
        });

        describe('When looking at the Earth911 link', () => {
          it('should render the Earth911 link', () => {
            expect(
              screen.getByRole('link', { name: 'Earth911' })
            ).toBeInTheDocument();
          });

          it('should render the Earth911 link with the correct href', () => {
            expect(
              screen.getByRole('link', { name: 'Earth911' })
            ).toHaveAttribute('href', 'https://earth911.com/');
          });
        });

        describe('When looking at the U.S. Environmental Protection Agency link', () => {
          it('should render the U.S. Environmental Protection Agency link', () => {
            expect(
              screen.getByRole('link', {
                name: 'U.S. Environmental Protection Agency',
              })
            ).toBeInTheDocument();
          });

          it('should render the U.S. Environmental Protection Agency link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'U.S. Environmental Protection Agency',
              })
            ).toHaveAttribute('href', 'https://www.epa.gov/recycle');
          });
        });
      });
    });

    describe('When looking at the Related Services section', () => {
      it('should render the Related Services heading', () => {
        expect(
          screen.getByRole('heading', { level: 3, name: 'Related Services' })
        ).toBeInTheDocument();
      });

      describe('When looking at the links in the Related Services section', () => {
        describe('When looking at the Request a Free Composter link', () => {
          it('should render the Request a Free Composter link', () => {
            expect(
              screen.getByRole('link', {
                name: 'Request a Free Composter',
              })
            ).toBeInTheDocument();
          });

          it('should render the Request a Free Composter link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'Request a Free Composter',
              })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Food-Waste/Request-a-Free-Composter'
            );
          });
        });

        describe('When looking at the Request a Trash or Recycling Cart link', () => {
          it('should render the Request a Trash or Recycling Cart link', () => {
            expect(
              screen.getByRole('link', {
                name: 'Request a Trash or Recycling Cart',
              })
            ).toBeInTheDocument();
          });

          it('should render the Request a Trash or Recycling Cart link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'Request a Trash or Recycling Cart',
              })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Request-a-Trash-or-Recycling-Cart'
            );
          });
        });

        describe('When looking at the Trash, Recycling & Yard Waste Pickup Schedule link', () => {
          it('should render the Trash, Recycling & Yard Waste Pickup Schedule link', () => {
            expect(
              screen.getByRole('link', {
                name: 'Trash, Recycling & yard Waste PickUp Schedule',
              })
            ).toBeInTheDocument();
          });

          it('should render the Trash, Recycling & Yard Waste Pickup Schedule link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'Trash, Recycling & yard Waste PickUp Schedule',
              })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Trash-Recycling-Yard-Waste-Pick-Up-Schedule'
            );
          });
        });

        describe('When looking at the Report a Missing Trash, Recycling or Yard Waste Pickup link', () => {
          it('should render the Report a Missing Trash, Recycling or Yard Waste Pickup link', () => {
            expect(
              screen.getByRole('link', {
                name: 'Report a Missing Trash, Recycling or Yard Waste Pickup',
              })
            ).toBeInTheDocument();
          });

          it('should render the Report a Missing Trash, Recycling or Yard Waste Pickup link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'Report a Missing Trash, Recycling or Yard Waste Pickup',
              })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Report-a-Missed-Trash-Recycling-or-Yard-Waste-Pickup'
            );
          });
        });

        describe('When looking at the Report a Missing Garbage Dumpster Pickup link', () => {
          it('should render the Report a Missing Garbage Dumpster Pickup link', () => {
            expect(
              screen.getByRole('link', {
                name: 'Report a Missing Garbage Dumpster Pickup',
              })
            ).toBeInTheDocument();
          });

          it('should render the Report a Missing Garbage Dumpster Pickup link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'Report a Missing Garbage Dumpster Pickup',
              })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Report-a-Missed-Garbage-Dumpster-Pickup'
            );
          });
        });

        describe('When looking at the Get Large Items Picked Up link', () => {
          it('should render the Get Large Items Picked Up link', () => {
            expect(
              screen.getByRole('link', { name: 'Get Large Items Picked Up' })
            ).toBeInTheDocument();
          });

          it('should render the Get Large Items Picked Up link with the correct href', () => {
            expect(
              screen.getByRole('link', { name: 'Get Large Items Picked Up' })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Get-Large-Items-Picked-Up'
            );
          });
        });

        describe('When looking at the Request a Roll-Off Dumpster link', () => {
          it('should render the Request a Roll-Off Dumpster link', () => {
            expect(
              screen.getByRole('link', { name: 'Request a Roll-Off Dumpster' })
            ).toBeInTheDocument();
          });

          it('should render the Request a Roll-Off Dumpster link with the correct href', () => {
            expect(
              screen.getByRole('link', { name: 'Request a Roll-Off Dumpster' })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Request-a-Roll-Off-Dumpster'
            );
          });
        });

        describe('When looking at the Submit Commercial or Multifamily Recycling Verification link', () => {
          it('should render the Submit Commercial or Multifamily Recycling Verification link', () => {
            expect(
              screen.getByRole('link', {
                name: 'Submit Commercial or Multifamily Recycling Verification',
              })
            ).toBeInTheDocument();
          });

          it('should render the Submit Commercial or Multifamily Recycling Verification link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'Submit Commercial or Multifamily Recycling Verification',
              })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Submit-Commercial-or-Multifamily-Recycling-Verification'
            );
          });
        });

        describe('When looking at the Get Reclaimed Water link', () => {
          it('should render the Get Reclaimed Water link', () => {
            expect(
              screen.getByRole('link', { name: 'Get Reclaimed Water' })
            ).toBeInTheDocument();
          });

          it('should render the Get Reclaimed Water link with the correct href', () => {
            expect(
              screen.getByRole('link', { name: 'Get Reclaimed Water' })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Parks-the-Environment/Get-Reclaimed-Water'
            );
          });
        });

        describe('When looking at the Start Commercial Garbage or Recycling Service link', () => {
          it('should render the Start Commercial Garbage or Recycling Service link', () => {
            expect(
              screen.getByRole('link', {
                name: 'Start Commercial Garbage or Recycling Service',
              })
            ).toBeInTheDocument();
          });

          it('should render the Start Commercial Garbage or Recycling Service link with the correct href', () => {
            expect(
              screen.getByRole('link', {
                name: 'Start Commercial Garbage or Recycling Service',
              })
            ).toHaveAttribute(
              'href',
              'https://www.orlando.gov/Trash-Recycling/Start-Commercial-Garbage-or-Recycling-Service'
            );
          });
        });
      });
    });
  });
});
