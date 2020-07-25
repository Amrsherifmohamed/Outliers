using System.Linq;
using AutoMapper;
using OutliersAPP.API.Dtos;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User,UserForListDto>()
           .ForMember(dest=>dest.PhotoURL,opt=>{opt.MapFrom(src=>src.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.Age,opt=>{opt.ResolveUsing(src=>src.DateOfBirth.CalculateAge());});

            CreateMap<User,UserForDetailsDto>()
            .ForMember(dest=>dest.PhotoURL,opt=>{opt.MapFrom(src=>src.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.Age,opt=>{opt.ResolveUsing(src=>src.DateOfBirth.CalculateAge());});
            
            CreateMap<Photo,PhotoForDetailsDto>();
            CreateMap<UserForUpdateDto,User>();
            CreateMap<Photo,PhotoForReturnDto>();
            CreateMap<PhotoForCreateDto,Photo>();
            CreateMap<UserForRegisterDto,User>();
            CreateMap<MessageForCreationDto,Message>().ReverseMap();
            CreateMap<Message,MessageToReturnDto>()
            .ForMember(dest=>dest.SenderPhotoUrl,opt=>{opt.MapFrom(src=>src.Sender.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.RecipientPhotoUrl,opt=>{opt.MapFrom(src=>src.Recipient.Photos.FirstOrDefault(p=>p.IsMain).Url);});
            CreateMap<PostForCreationDto,Post>().ReverseMap();
            CreateMap<Post,PostToReturnDto>();
            CreateMap<Post,PostForDetailsDto>()
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.UserKnownAs,opt=>{opt.MapFrom(src=>src.User.KnownAs);});
            CreateMap<Post,PostForListDto>()
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.UserKnownAs,opt=>{opt.MapFrom(src=>src.User.KnownAs);});
            CreateMap<PostForUpdateDto,Post>();
            CreateMap<CommentForCreationDto,Comment>();
            CreateMap<Comment,CommentForListDto>()
            .ForMember(dest=>dest.UserKnownAs,opt=>{opt.MapFrom(src=>src.User.KnownAs);})
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);});
            CreateMap<Comment,CommentForDetails>()
            .ForMember(dest=>dest.UserKnownAs,opt=>{opt.MapFrom(src=>src.User.KnownAs);})
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);});
            CreateMap<Comment,CommentForReturnDto>();   
            CreateMap<CommentForUpdateDto,Comment>();   
            CreateMap<User,UserForcaredDto>()
            .ForMember(dest=>dest.PhotoURL,opt=>{opt.MapFrom(src=>src.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.Age,opt=>{opt.ResolveUsing(src=>src.DateOfBirth.CalculateAge());});
            
            
            CreateMap<JobForCreationDto,Job>().ReverseMap();
            CreateMap<Job,JobToReturnDto>();
            CreateMap<Job,JobForDetailsDto>()
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.CompanyName,opt=>{opt.MapFrom(src=>src.User.KnownAs);})
            .ForMember(dest=>dest.CompanyInfo,opt=>{opt.MapFrom(src=>src.User.Introduction);})
            .ForMember(dest=>dest.CompanyCity,opt=>{opt.MapFrom(src=>src.User.City);})
            .ForMember(dest=>dest.CompanyCountry,opt=>{opt.MapFrom(src=>src.User.Country);})
            .ForMember(dest=>dest.CompanyPhone,opt=>{opt.MapFrom(src=>src.User.PhoneNumber);});

            CreateMap<Job,JobForListDto>()
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.CompanyName,opt=>{opt.MapFrom(src=>src.User.KnownAs);})
            .ForMember(dest=>dest.CompanyInfo,opt=>{opt.MapFrom(src=>src.User.Introduction);})
            .ForMember(dest=>dest.CompanyCity,opt=>{opt.MapFrom(src=>src.User.City);})
            .ForMember(dest=>dest.CompanyCountry,opt=>{opt.MapFrom(src=>src.User.Country);})
            .ForMember(dest=>dest.CompanyPhone,opt=>{opt.MapFrom(src=>src.User.PhoneNumber);});

            CreateMap<JobForUpdateDto,Job>();
         
            
       
        //playlist
            CreateMap<PlaylistForCreationDto, playlist>().ReverseMap();
            CreateMap<playlist,PlaylistToReturnDto>();
            CreateMap<playlist,PlaylistForDetailsDto>()
                .ForMember(dest => dest.UserPhotoUrl, opt => { opt.MapFrom(src => src.User.Photos.FirstOrDefault(p => p.IsMain).Url); })
                .ForMember(dest => dest.ProfName, opt => { opt.MapFrom(src => src.User.KnownAs); })
                .ForMember(dest => dest.ProfInfo, opt => { opt.MapFrom(src => src.User.Introduction); })
                .ForMember(dest => dest.ProfCity, opt => { opt.MapFrom(src => src.User.City); })
                .ForMember(dest => dest.ProfCountry, opt => { opt.MapFrom(src => src.User.Country); })
                .ForMember(dest => dest.ProfPhone, opt => { opt.MapFrom(src => src.User.PhoneNumber); });
            CreateMap<playlist,PlaylistForListDto>()
                .ForMember(dest => dest.UserPhotoUrl, opt => { opt.MapFrom(src => src.User.Photos.FirstOrDefault(p => p.IsMain).Url); })
                .ForMember(dest => dest.ProfName, opt => { opt.MapFrom(src => src.User.KnownAs); })
                .ForMember(dest => dest.ProfInfo, opt => { opt.MapFrom(src => src.User.Introduction); })
                .ForMember(dest => dest.ProfCity, opt => { opt.MapFrom(src => src.User.City); })
                .ForMember(dest => dest.ProfCountry, opt => { opt.MapFrom(src => src.User.Country); })
                .ForMember(dest => dest.ProfPhone, opt => { opt.MapFrom(src => src.User.PhoneNumber); });
            CreateMap<PlaylistForUpdateDto, playlist>();

             //video
            CreateMap<VideoForCreationDto,video>().ReverseMap();
            CreateMap<video,VideoForReturnDto>();

            CreateMap<video,VideoForDetailsDto>()
                .ForMember(dest => dest.UserPhotoUrl, opt => { opt.MapFrom(src => src.User.Photos.FirstOrDefault(p => p.IsMain).Url); })
                .ForMember(dest => dest.ProfName, opt => { opt.MapFrom(src => src.User.KnownAs); })
                .ForMember(dest => dest.ProfInfo, opt => { opt.MapFrom(src => src.User.Introduction); })
                .ForMember(dest => dest.ProfCity, opt => { opt.MapFrom(src => src.User.City); })
                .ForMember(dest => dest.ProfCountry, opt => { opt.MapFrom(src => src.User.Country); })
                .ForMember(dest => dest.ProfPhone, opt => { opt.MapFrom(src => src.User.PhoneNumber); });
            CreateMap<video,VideoForListDto>()
                .ForMember(dest => dest.UserPhotoUrl, opt => { opt.MapFrom(src => src.User.Photos.FirstOrDefault(p => p.IsMain).Url); })
                .ForMember(dest => dest.ProfName, opt => { opt.MapFrom(src => src.User.KnownAs); })
                .ForMember(dest => dest.ProfInfo, opt => { opt.MapFrom(src => src.User.Introduction); })
                .ForMember(dest => dest.ProfCity, opt => { opt.MapFrom(src => src.User.City); })
                .ForMember(dest => dest.ProfCountry, opt => { opt.MapFrom(src => src.User.Country); })
                .ForMember(dest => dest.ProfPhone, opt => { opt.MapFrom(src => src.User.PhoneNumber); });
            // CreateMap<VideoForUpdateDto, video>();
            CreateMap<CareerpathForCreationDto,Careerpath>();
            CreateMap<Careerpath,CareerpathForReturnDto>();
            CreateMap<Careerpath,CareerpathForDetailsDto>();
            CreateMap<CareerpathForupdateDto,Careerpath>();
            CreateMap<CareerDetails,PathForDetailsDto>();
            CreateMap<PathForCreationDto,CareerDetails>();
            CreateMap<CareerDetails,PathForReturnDto>();
            CreateMap<CareerDetails,PathForDetailsDto>();
            CreateMap<PathForupdateDto,CareerDetails>();

            

             // ContactUs
            CreateMap<ContactForCreationDto,ContactUs>().ReverseMap();
            CreateMap<ContactUs,ContactToReturnDto>();
            CreateMap<ContactUs,ContactForDetailsDto>()
            .ForMember(dest=>dest.SenderPhotoUrl,opt=>{opt.MapFrom(src=>src.Sender.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.SenderKnownAs,opt=>{opt.MapFrom(src=>src.Sender.KnownAs);});
            CreateMap<ContactUs,ContactForListDto>()
            .ForMember(dest=>dest.SenderPhotoUrl,opt=>{opt.MapFrom(src=>src.Sender.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.SenderKnownAs,opt=>{opt.MapFrom(src=>src.Sender.KnownAs);});

            // AdminContact
            CreateMap<AdminContactForCreationDto,AdminContact>().ReverseMap();
            CreateMap<AdminContact,AdminContactToReturnDto>();
            CreateMap<AdminContact,AdminContactForDetailsDto>();
            CreateMap<AdminContact,AdminContactForListDto>();
            CreateMap<RateForCreationsDto,Rate>();
            CreateMap<Rate,RateForReturnDto>();
            CreateMap<Rate,RateForDetailsDto>();
            CreateMap<Rate,RateForlistDto>();
            CreateMap<CereerpathForcreatonuerDto,User>();
            CreateMap<User,CereerpathForcreatonuerDto>();

       
       }
        
    }
}